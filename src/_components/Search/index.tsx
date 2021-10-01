import {API, graphqlOperation} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import {withTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {listProfiles} from '../../graphql/queries';
import {m} from '../../_actions';
import {renderFriendItem} from '../shared';

const screenHeight = Dimensions.get('window').height;

export const SearchContent = withTheme((props: any) => {
  const dispatch = useDispatch();
  const model = useSelector(state => (state as any).app.model.clone());

  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);
  const [selectedProfiles, setSelectedProfiles] = useState<any>(
    props?.route?.params?.selectedProfiles || [],
  );

  const fetchProfiles = async () => {
    try {
      const profilesData = await API.graphql(graphqlOperation(listProfiles));
      const cats = (profilesData as any).data.listProfiles.items;
      setProfiles(
        cats
          .filter((f: any) => f.id !== model.user?.profile?.id)
          .map((m: any) => {
            return {
              ...m,
              isFollower: model.isFollower(m),
              isFollowing: model.isFollowing(m),
            };
          }),
      );
    } catch (err) {
      console.log('error fetching profiles');
    }
  };
  useEffect(() => {
    fetchProfiles().then(() => setLoading(false));
  }, []);

  const onFollow = (item: any) => {
    model.onFollow(item).then((mdl: any) => dispatch(m(mdl)));
    fetchProfiles();
  };

  return (
    <View style={{width: '100%', maxHeight: screenHeight - 180}}>
      {loading && <Text>Chargement des dernières publications ...</Text>}
      {!loading && (
        <FlatList
          data={profiles}
          renderItem={renderFriendItem(
            false,
            selectedProfiles,
            data => setSelectedProfiles(data),
            onFollow,
          )}
          numColumns={2}
        />
      )}
    </View>
  );
});
