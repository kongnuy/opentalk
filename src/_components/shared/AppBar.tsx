import Auth from '@aws-amplify/auth';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {handleError, LazyImage, notAvailable} from './index';
import {appActions} from '../../_actions';
import {HorizontalLinearGradientAppBar} from '../LinearGradiant';
import {ChevronLeftIcon, PowerOffIcon} from './Icons';

export const MyAppBarComponent = (props: any) => {
  const model = useSelector(state => (state as any).app.model);
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: Platform.OS === 'ios' ? 100 : 60,
      }}>
      <HorizontalLinearGradientAppBar>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            minHeight: 50,
          }}>
          <View
            style={{
              flex: 1,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{paddingLeft: 10}}>
              <TouchableOpacity onPress={notAvailable}>
                <View
                  style={{
                    width: 35,
                    height: 30,
                    overflow: 'hidden',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#fff',
                      height: 3,
                      width: 25,
                      marginVertical: 6,
                      borderRadius: 6,
                    }}></View>
                  <View
                    style={{
                      backgroundColor: '#fff',
                      position: 'absolute',
                      right: 5,
                      height: 3,
                      width: 25,

                      borderRadius: 6,
                    }}></View>
                  <View
                    style={{
                      backgroundColor: '#fff',
                      height: 3,
                      width: 25,
                      marginVertical: 6,
                      borderRadius: 6,
                    }}></View>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{color: '#fff', fontSize: 17, fontWeight: '600'}}>
                {props.route.title || ''}
              </Text>
            </View>
            <View style={{paddingRight: 10}}>
              <TouchableOpacity
                onPress={async () => {
                  props.navigation.navigate('ProfilePage');
                  /*try {
                    await Auth.signOut({global: true});
                    model
                      .checkUser()
                      .then((m: any) =>
                        dispatch(appActions.replaceModelRequest(m)),
                      );
                  } catch (error) {
                    handleError(error);
                  }*/
                }}>
                <LazyImage
                  img={model.user?.profile?.imageKey}
                  renderPlaceHolder={true}
                  style={{height: '100%', width: '100%', borderRadius: 5}}
                  parentStyle={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: '#ccc',
                    overflow: 'hidden',
                  }}
                />

                {/* <PowerOffIcon color={'#fff'} /> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </HorizontalLinearGradientAppBar>
    </View>
  );
};

export const MyAppBarSecondaryComponent = (props: any) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: Platform.OS === 'ios' ? 100 : 60,
      }}>
      <HorizontalLinearGradientAppBar>
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <View
            style={{
              minHeight: 50,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{paddingLeft: 10}}>
              <TouchableOpacity
                onPress={() => {
                  if (props.onClick) {
                    props.onClick();
                  } else {
                    navigation.goBack();
                  }
                }}>
                <View
                  style={{
                    width: 65,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      marginRight: 15,
                    }}>
                    <ChevronLeftIcon color={'#fff'} />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: '700',
                      }}>
                      Retour
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </HorizontalLinearGradientAppBar>
    </View>
  );
};
