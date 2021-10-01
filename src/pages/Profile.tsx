import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {m} from '../_actions';
import {
  handleError,
  LazyImage,
  MyAppBarSecondaryComponent,
} from '../_components';

export const ProfilePage = (props: any) => {
  const navigation = useNavigation();
  const model = useSelector(state => (state as any).app.model.clone());
  const dispatch = useDispatch();
  return (
    <>
      <MyAppBarSecondaryComponent onClick={() => navigation.goBack()} />
      <View style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 20,
          }}>
          <LazyImage
            img={model.user?.profile?.imageKey}
            renderPlaceHolder={true}
            style={{height: '100%', width: '100%', borderRadius: 5}}
            parentStyle={{
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: '#ccc',
              overflow: 'hidden',
            }}
          />
        </View>

        <View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingVertical: 5,
            }}>
            <Text style={{fontWeight: '700', paddingHorizontal: 10}}>Name</Text>
            <Text>Kongnuy</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingVertical: 5,
            }}>
            <Text style={{fontWeight: '700', paddingHorizontal: 10}}>
              Number of followers
            </Text>
            <Text>{model?.user?.followers?.length}</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingVertical: 5,
            }}>
            <Text style={{fontWeight: '700', paddingHorizontal: 10}}>
              Number of followings
            </Text>
            <Text>{model?.user?.followings?.length}</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingVertical: 5,
            }}>
            <TouchableOpacity
              onPress={async () => {
                try {
                  await Auth.signOut({global: true});
                  model.checkUser().then((mdl: any) => dispatch(m(mdl)));
                } catch (error) {
                  handleError(error);
                }
              }}>
              <Text style={{color: 'tomato', fontWeight: '700'}}>
                Déconnexion
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
