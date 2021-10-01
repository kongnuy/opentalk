import {API, graphqlOperation} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import {withTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {listPosts} from '../../graphql/queries';
import {m} from '../../_actions';
import {styles} from '../../_helpers';
import {renderItem} from '../shared';

const numColumns = 1;
const screenHeight = Dimensions.get('window').height;

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

export const HomeContent = withTheme((props: any) => {
  const dispatch = useDispatch();
  const model = useSelector(state => (state as any).app.model.clone());

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = React.useState([]);
  const fetchPosts = async () => {
    try {
      const postsData = await API.graphql(graphqlOperation(listPosts));
      const cats = (postsData as any).data.listPosts.items || [];

      cats.sort((a: any, b: any) => {
        return (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any);
      });
      setPosts(
        cats.filter((f: any) => {
          if (f.public) return true;
          if (f.profile.id === model.user.profile.id) return true;
          return model.isFollowing(f.profile);
        }),
      );
    } catch (err) {
      console.log('error fetching posts');
    }
  };
  useEffect(() => {
    fetchPosts().then(() => setLoading(false));
  }, []);

  const onLike = async (item: any, cb: any) => {
    model.onLike(item, 'post').then((mdl: any) => dispatch(m(mdl)));
    cb();
    fetchPosts();
  };

  return (
    <View style={{width: '100%', maxHeight: screenHeight - 180}}>
      {loading && <Text>Chargement des dernières publications ...</Text>}
      {!loading && posts.length > 0 && (
        <FlatList
          data={posts}
          renderItem={renderItem({...props, onLike, model})}
          numColumns={numColumns}
          ItemSeparatorComponent={renderSeparator}
        />
      )}
      {!loading && posts.length === 0 && (
        <View style={[styles.flexCenter, {paddingVertical: 50}]}>
          <Text>No post yet.</Text>
        </View>
      )}
    </View>
  );
});
