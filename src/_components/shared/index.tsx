export * from './Buttons';
export * from './Icons';
export * from './AppBar';
export * from './ImagePicker';

import {Storage} from 'aws-amplify';
import {formatDistance} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card, IconButton} from 'react-native-paper';
import {primaryColor} from '../../_helpers';
import {ButtonPrimarySmall, ButtonPrimarySmall2} from './Buttons';
import {TimesIcon} from './Icons';

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const tileSize = (screenWidth - 30) / numColumns;

export const renderFriendItem =
  (
    isfriend = true,
    selectedProfiles = [],
    onClick = (data: any) => {},
    onFollow = (item: any) => {},
  ) =>
  ({item, index}) => {
    const i = selectedProfiles.findIndex((s: any) => s.id === item.id);
    const isIn = i > -1 || item.isFollowing === true;
    return (
      <View
        style={{
          padding: 10,
          width: tileSize - (isfriend ? 20 : 0),
        }}>
        <Card
          style={{
            borderColor: '#f6f6f6',
            borderWidth: 1,
          }}>
          <Card.Content>
            <View
              style={{
                justifyContent: 'flex-end',
                flexDirection: 'row',
              }}>
              <TouchableOpacity>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TimesIcon color={'#fff'} size={8} />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <LazyImage
                img={item.imageKey}
                renderPlaceHolder={true}
                style={{height: '100%', width: '100%', borderRadius: 5}}
                parentStyle={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: '#ccc',
                  overflow: 'hidden',
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontWeight: 'bold', paddingTop: 10, paddingBottom: 5}}>
                {item.username}
              </Text>
              <Text style={{marginBottom: 20}}>
                @
                {item.alias?.length > 13
                  ? item.alias.substring(0, 13) + '...'
                  : item.alias}
              </Text>
            </View>
          </Card.Content>
          <Card.Actions
            style={{
              borderTopColor: '#ddd',
              borderTopWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {isIn && (
              <ButtonPrimarySmall2
                onPress={() => {
                  const elts: any[] = [...selectedProfiles];
                  if (isIn) {
                    elts.splice(i, 1);
                  } else {
                    elts.push(item);
                  }
                  onClick(elts);
                  onFollow(item);
                }}
                title={'Déjà abonné'}
              />
            )}
            {!isIn && (
              <ButtonPrimarySmall
                onPress={() => {
                  const elts: any[] = [...selectedProfiles];
                  if (isIn) {
                    elts.splice(i, 1);
                  } else {
                    elts.push(item);
                  }
                  onClick(elts);
                  onFollow(item);
                }}
                title={"S'abonner"}
              />
            )}
          </Card.Actions>
        </Card>
      </View>
    );
  };

export const handleError = (
  err: any,
  defaultMsg = 'An error occured! Please try again later.',
) => {
  const msg = typeof err === 'string' ? err : err?.message || defaultMsg;
  console.log('error: ', err);
  Alert.alert('Error !', msg);
};

export const notAvailable = () => {
  Alert.alert('Info ', 'This functionnality is not availaible at the moment');
};
export const LazyImage = (props: any) => {
  const [img, setImg] = useState<any>('');

  useEffect(() => {
    if (props.img && props.img.indexOf('http') === -1) {
      Storage.get(props.img).then(data => {
        setImg(data);
      });
    }
  }, [props.img]);

  if (img.length) {
    return (
      <View style={props.parentStyle}>
        <Image source={{uri: img}} style={props.style} />
      </View>
    );
  }
  if (props.renderPlaceHolder) {
    return <View style={props.parentStyle}></View>;
  }
  return <View></View>;
};

export const ListItem = (props: any) => {
  const {item} = props;
  const [commentCounts, setCommentCounts] = useState(
    item.comments?.items?.length || 0,
  );

  const [responseCounts, setResponseCounts] = useState(
    item.responses?.items?.length || 0,
  );
  const [likeCounts, setLikeCounts] = useState(item.likes?.items?.length || 0);
  const [commentLikeCounts, setCommentLikeCounts] = useState(
    item.likes?.items?.length || 0,
  );
  const [responseLikeCounts, setResponseLikeCounts] = useState(
    item.likes?.items?.length || 0,
  );

  const likeColor = props.model.hasLike(item) ? primaryColor : '#ccc';

  const likeCallBack = async (optimistic = false) => {
    if (optimistic) {
      if (props.isComment) {
        if (likeColor === '#ccc') {
          setCommentLikeCounts(commentLikeCounts + 1);
        } else {
          setCommentLikeCounts(commentLikeCounts - 1);
        }
      } else if (props.isResponse) {
        if (likeColor === '#ccc') {
          setResponseLikeCounts(responseLikeCounts + 1);
        } else {
          setResponseLikeCounts(responseLikeCounts - 1);
        }
      } else {
        if (likeColor === '#ccc') {
          setLikeCounts(likeCounts + 1);
        } else {
          setLikeCounts(likeCounts - 1);
        }
      }
    }
  };

  if (props.isResponse) {
    return (
      <View>
        <View
          style={{
            padding: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 15}}>
              <LazyImage
                img={item.profile?.imageKey}
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
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginRight: 15}}>
                    <Text style={{fontWeight: 'bold', color: '#444'}}>
                      {item.profile?.name}
                    </Text>
                  </View>
                  <View>
                    <Text style={{color: '#777'}}>@{item.profile?.alias}</Text>
                  </View>
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
                      fontSize: 12,
                    }}>
                    •{' '}
                    {formatDistance(new Date(item.createdAt), new Date(), {
                      addSuffix: false,
                    })}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: screenWidth - 100,
                }}>
                <Text numberOfLines={2} ellipsizeMode="tail">
                  {item.text}
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <View
              style={{
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
                <IconButton
                  icon="thumb-up"
                  color={likeColor}
                  size={20}
                  onPress={() => {
                    likeCallBack(true);
                    props.onLike(item, likeCallBack, 'response');
                  }}
                />
                <Text
                  style={{
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    color: '#999',
                  }}>
                  {responseLikeCounts}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  if (props.isComment) {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('CommentDetails', {
            post: props.route?.params?.item,
            item: item,
          });
        }}>
        <View
          style={{
            padding: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 15}}>
              <LazyImage
                img={item.profile?.imageKey}
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
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginRight: 15}}>
                    <Text style={{fontWeight: 'bold', color: '#444'}}>
                      {item.profile?.name}
                    </Text>
                  </View>
                  <View>
                    <Text style={{color: '#777'}}>@{item.profile?.alias}</Text>
                  </View>
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
                      fontSize: 12,
                    }}>
                    •{' '}
                    {formatDistance(new Date(item.createdAt), new Date(), {
                      addSuffix: false,
                    })}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: screenWidth - 100,
                }}>
                <Text numberOfLines={2} ellipsizeMode="tail">
                  {item.text}
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <View
              style={{
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
                  {responseCounts}
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
                    props.onLike(item, likeCallBack, 'comment');
                  }}
                />
                <Text
                  style={{
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    color: '#999',
                  }}>
                  {commentLikeCounts}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Secondary', {item});
      }}>
      <View
        style={{
          padding: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{paddingRight: 15}}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                backgroundColor: '#ccc',
                overflow: 'hidden',
              }}>
              <LazyImage
                img={item.profile.imageKey}
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
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 15}}>
                <Text style={{fontWeight: 'bold', color: '#444'}}>
                  {item.profile.username || item.profile?.name}
                </Text>
              </View>
              <View>
                <Text style={{color: '#777'}}>@{item.profile.alias}</Text>
              </View>
            </View>
            <View
              style={{
                maxWidth: screenWidth - 100,
              }}>
              <Text numberOfLines={2} ellipsizeMode="tail">
                {item.text}
              </Text>
              {item.img && (
                <LazyImage
                  img={item.img}
                  parentStyle={{
                    maxHeight: 150,
                    width: '100%',
                    flex: 1,
                    paddingVertical: 10,
                  }}
                  style={{
                    height: '100%',
                    width: screenWidth - 100,
                    borderRadius: 5,
                  }}
                />
              )}
            </View>
          </View>
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
                  props.onLike(item, likeCallBack);
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
                {formatDistance(new Date(item.createdAt), new Date(), {
                  addSuffix: false,
                })}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export const renderItem =
  (props: any) =>
  ({item, index}) => {
    return <ListItem {...props} item={item} />;
  };
