import {API, graphqlOperation} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {formatDistance} from 'date-fns';
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconButton, TextInput, withTheme} from 'react-native-paper';
import {getPost} from '../../graphql/queries';
import {primaryColor, secondaryColor, styles} from '../../_helpers';
import {
  ButtonPrimarySmall,
  CameraIcon,
  handleError,
  LazyImage,
  ListItem,
  notAvailable,
  SmileIcon,
} from '../shared';
import {createComment} from '../../graphql/mutations';
import {useDispatch, useSelector} from 'react-redux';
import {m} from '../../_actions';
import {useIsFocused} from '@react-navigation/native';

const numColumns = 1;

const renderItem =
  (props: any) =>
  ({item, index}) => {
    if (item === true && index === 0) {
      return <Post {...props} />;
    } else if (item === false) {
      return (
        <View style={[styles.flexCenter, {paddingVertical: 50}]}>
          <Text>No comment yet.</Text>
        </View>
      );
    } else if (item === true) {
      return <View></View>;
    }
    return <ListItem {...props} item={item} isComment={true} />;
  };

const renderSeparator = () => {
  return (
    <View
      style={{
        height: 2,
        width: '100%',
        backgroundColor: '#ddd',
      }}
    />
  );
};

const Post = (props: any) => {
  const post = props.post;
  const [commentCounts, setCommentCounts] = useState(
    post.comments?.items?.length || 0,
  );
  const [likeCounts, setLikeCounts] = useState(post.likes?.items?.length || 0);

  const likeColor = props.model.hasLike(post) ? primaryColor : '#ccc';

  const likeCallBack = async (optimistic = false) => {
    if (optimistic) {
      if (likeColor === '#ccc') {
        setLikeCounts(likeCounts + 1);
      } else {
        setLikeCounts(likeCounts - 1);
      }
    }
  };

  return (
    <View
      style={{
        padding: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{paddingRight: 15}}>
          <LazyImage
            img={post.profile?.imageKey}
            renderPlaceHolder={true}
            style={{height: '100%', width: '100%', borderRadius: 5}}
            parentStyle={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: '#ccc',
              overflow: 'hidden',
            }}
          />
        </View>
        <View>
          <View style={{flexDirection: 'column'}}>
            <View style={{marginRight: 15}}>
              <Text style={{fontWeight: 'bold', color: '#444'}}>
                {post.profile.username}
              </Text>
            </View>
            <View>
              <Text style={{color: '#777'}}>@{post.profile?.alias}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 15}}>
        <Text style={{paddingBottom: post.img ? 0 : 10}}>{post.text}</Text>
        {post.img && (
          <LazyImage
            img={post.img}
            parentStyle={{
              maxHeight: 200,
              width: '100%',
              flex: 1,
              paddingVertical: 10,
            }}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 5,
            }}
          />
        )}
        {renderSeparator()}
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <View
          style={{
            width: '65%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginRight: 25,
            }}>
            <IconButton icon="comment-text" color={'#ccc'} size={20} />
            <Text
              style={{
                textAlignVertical: 'center',
                textAlign: 'center',
                color: '#999',
              }}>
              {commentCounts}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginRight: 25,
            }}>
            <IconButton
              icon="thumb-up"
              color={likeColor}
              size={20}
              onPress={() => {
                likeCallBack(true);
                props.onLike(post, likeCallBack, 'post');
              }}
            />
            <Text
              style={{
                textAlignVertical: 'center',
                textAlign: 'center',
                color: '#999',
              }}>
              {likeCounts}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlignVertical: 'center',
                textAlign: 'center',
                color: '#999',
              }}>
              •{' '}
              {formatDistance(new Date(post.createdAt), new Date(), {
                addSuffix: false,
              })}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export const InputComment = ({text, setText}) => {
  return (
    <TextInput
      label=""
      value={text}
      theme={{
        colors: {
          primary: primaryColor,
          text: primaryColor,
          placeholder: 'rgba(0, 0, 0, 0.3)',
        },
      }}
      placeholder={'Your comment'}
      onChangeText={setText}
      style={styles.inputStyle}
      right={<TextInput.Affix text="0/100" />}
    />
  );
};
export const PostContent = withTheme((props: any) => {
  const dispatch = useDispatch();
  const model = useSelector(state => (state as any).app.model.clone());
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');

  const [post, setPost] = React.useState<any>({});
  const fetchPost = async () => {
    try {
      const postData = await API.graphql(
        graphqlOperation(getPost, {id: props.route?.params?.item.id}),
      );
      const p = (postData as any).data.getPost;
      p.comments.items.sort((a, b) => {
        return (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any);
      });

      setPost(p);
    } catch (err) {
      console.log('error fetching post');
    }
  };
  useEffect(() => {
    fetchPost().then(() => setLoading(false));
    const didBlurSubscription = props.navigation.addListener(
      'willBlur',
      (payload: any) => {
        console.debug('didBlur', payload);
      },
    );
    return () => didBlurSubscription.remove();
  }, []);

  const handleSubmit = async () => {
    if (!text?.length) {
      return Alert.alert('Error', 'Please enter your comment !');
    }
    const input = {
      text,
      postId: post.id,
      profileId: model.user.profile?.id,
    };
    setText('');
    setLoading(true);
    try {
      await API.graphql(graphqlOperation(createComment, {input}));

      await fetchPost();
    } catch (err) {
      handleError(err);
    }
    setLoading(false);
  };
  const onLike = async (item: any, cb: any, type: string) => {
    if (item) {
      model.onLike(item, type).then((mdl: any) => dispatch(m(mdl)));
      cb();
    }

    fetchPost();
  };
  const comments = post?.comments?.items || [];
  const empty = comments.length > 0;
  const display = loading ? 'none' : 'flex';
  return (
    <View style={{flex: 1}}>
      <View style={{width: '100%', flex: 8}}>
        {loading && (
          <View
            style={{
              padding: 10,
            }}>
            <Text>Chargement de la publication ...</Text>
          </View>
        )}
        {!loading && (
          <>
            <FlatList
              data={[true, empty, ...comments]}
              renderItem={renderItem({
                ...props,
                onLike,
                post,
                model,
                fetchPost,
              })}
              numColumns={numColumns}
              ItemSeparatorComponent={renderSeparator}
            />
          </>
        )}
      </View>
      <View style={{flex: 2, paddingHorizontal: 15, backgroundColor: '#fff'}}>
        <KeyboardAvoidingView>
          <View style={{justifyContent: 'flex-end'}}>
            {!loading && <InputComment text={text} setText={setText} />}
            <View
              style={{
                marginTop: 15,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', display}}>
                <View>
                  <TouchableOpacity onPress={notAvailable}>
                    <SmileIcon color={secondaryColor} size={17} />
                  </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal: 10}}>
                  <TouchableOpacity onPress={notAvailable}>
                    <CameraIcon color={primaryColor} size={17} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{maxWidth: 100, display}}>
                <ButtonPrimarySmall
                  title={'Confirm'}
                  onPress={() => handleSubmit()}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
});
