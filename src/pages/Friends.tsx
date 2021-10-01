import {API, Auth, graphqlOperation, Storage} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {TextInput, withTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  createProfile,
  createUserCategory,
  createUserFollowing,
} from '../graphql/mutations';
import {listProfiles} from '../graphql/queries';
import {appActions} from '../_actions';
import {
  ButtonPrimary,
  ChevronRightIcon,
  handleError,
  HorizontalLinearGradient,
  Logo,
  renderFriendItem,
} from '../_components';
import {primaryColor, styles} from '../_helpers';

const numColumns = 2;

const createUserProfile = async (
  name: string,
  userId: string,
  picture: any,
  email: string,
  result: any,
) => {
  try {
    await API.graphql(
      graphqlOperation(createProfile, {
        input: {
          name,
          userId,
          username: name,
          image: picture,
          alias: email.split('@')[0],
          imageKey: (result as any).key,
        },
      }),
    );
  } catch (error) {
    console.error(error);
  }
};

const createUserCategories = async (usercategories: any[], userId: string) => {
  await Promise.all(
    usercategories.map(uc => {
      return new Promise(async resolve => {
        try {
          resolve(
            await API.graphql(
              graphqlOperation(createUserCategory, {
                input: {
                  userId,
                  categoryId: uc.id,
                },
              }),
            ),
          );
        } catch (error) {
          console.error(error);
        }
      });
    }),
  );
};

const createUserFollowingProfiles = async (profiles: any[], userId: string) => {
  await Promise.all(
    profiles.map(uc => {
      return new Promise(async resolve => {
        try {
          resolve(
            await API.graphql(
              graphqlOperation(createUserFollowing, {
                input: {
                  userId,
                  profileId: uc.id,
                },
              }),
            ),
          );
        } catch (error) {
          console.error(error);
        }
      });
    }),
  );
};

export const Friends = withTheme((props: any) => {
  const dispatch = useDispatch();
  const model = useSelector(state => (state as any).app.model.clone());
  const [freeze, setFreeze] = useState(false);
  const [loading, setLoading] = useState(true);
  const [confirm, setConfirm] = useState(false);
  const [confirmCode, setConfirmCode] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [selectedProfiles, setSelectedProfiles] = useState<any>(
    model?.data?.userfriends || [],
  );

  const fetchProfiles = async () => {
    try {
      const profilesData = await API.graphql(graphqlOperation(listProfiles));
      const cats = (profilesData as any).data.listProfiles.items;
      setProfiles(cats);
    } catch (err) {
      console.log('error fetching profiles');
      handleError(err, 'Error fetching profiles');
    }
  };
  useEffect(() => {
    fetchProfiles().then(() => setLoading(false));
  }, []);

  const handleSubmit = async (isConfirm = false) => {
    setFreeze(true);
    setConfirm(false);
    const {userdata, usercategories} = model.data;
    const {name, password, email, uri} = userdata;

    if (isConfirm) {
      try {
        await Auth.confirmSignUp(name, confirmCode);
        try {
          await Auth.signIn(email, password);
          model
            .checkUser()
            .then((m: any) => dispatch(appActions.replaceModelRequest(m)));
        } catch (error) {
          console.log('error signing in', error);
          setFreeze(false);
        }
      } catch (err) {
        console.log({err});
        setConfirm(true);
        handleError(err, 'Le code saisi est invalide !');
      }
      return;
    }
    try {
      const nms = uri.split('/');
      const nm = nms[nms.length - 1];
      const response = await fetch(uri);
      const blob = await response.blob();
      Storage.put('public/userimages/' + Date.now() + '_' + nm, blob, {
        level: 'public',
      })
        .then(async result => {
          const picture = await Storage.get((result as any).key);
          const res = await Auth.signUp({
            username: name,
            password: password,
            attributes: {
              email,
            },
          });
          await createUserProfile(name, res.userSub, picture, email, result);
          await createUserCategories(usercategories, res.userSub);
          await createUserFollowingProfiles(selectedProfiles, res.userSub);
          setConfirm(true);
        })
        .catch(err => {
          setFreeze(false);
          handleError(err);
        });
    } catch (err) {
      console.log({err});
      setFreeze(false);
      handleError(err);
    }
  };
  const displayConfirm = confirm ? 'flex' : 'none';

  const display = freeze ? 'none' : 'flex';
  const displayInv = freeze && !confirm ? 'flex' : 'none';
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          overflow: 'hidden',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}>
        <HorizontalLinearGradient>
          <View style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  display: display,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#fff'}}>Step</Text>

                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Register');
                  }}>
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 4,
                    }}></View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Categories');
                  }}>
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 4,
                    }}></View>
                </TouchableOpacity>
                <View
                  style={{
                    width: 16,
                    height: 8,
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 4,
                    backgroundColor: '#fff',
                  }}></View>
              </View>
              <View
                style={{
                  flex: 3,
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    handleSubmit();
                  }}>
                  <View
                    style={{
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                      alignItems: 'center',
                      display,
                    }}>
                    <Text style={{color: '#fff', fontWeight: '500'}}>Skip</Text>
                    <View style={{width: 10}}></View>
                    <ChevronRightIcon style={{color: '#fff'}} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 2,
              }}>
              <Logo />
            </View>
            <View
              style={{
                flex: 1,
              }}></View>
          </View>
        </HorizontalLinearGradient>
      </View>
      <View style={[styles.content]}>
        <View
          style={{
            flex: 5,
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={[
                styles.title,
                {textAlign: 'center', paddingVertical: 10, display},
              ]}>
              {loading ? 'Chargement ... ' : 'Follow your profiles'}
            </Text>
            <Text
              style={[
                styles.title,
                {textAlign: 'center', paddingVertical: 10, display: displayInv},
              ]}>
              Chargement en cours ...
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              paddingBottom: 120,
              display: displayConfirm,
            }}>
            <Text
              style={[
                styles.title,
                {
                  textAlign: 'center',
                  paddingVertical: 10,
                  display: displayConfirm,
                },
              ]}>
              Confirmation
            </Text>
            <Text
              style={[
                {
                  textAlign: 'center',
                  paddingVertical: 20,
                  display: displayConfirm,
                },
              ]}>
              Saisissez le code de confirmation reçu par email.
            </Text>
            <TextInput
              label="Confirm Code"
              value={confirmCode}
              theme={{
                colors: {
                  primary: primaryColor,
                  text: primaryColor,
                  background: '#fff',
                },
              }}
              onChangeText={setConfirmCode}
              style={styles.inputStyle}
              right={<TextInput.Icon name="check" color={primaryColor} />}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 50,
                width: '100%',
                display: displayConfirm,
              }}>
              <View>
                <ButtonPrimary
                  onPress={() => {
                    handleSubmit(true);
                  }}
                  title={'Confirm'}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              paddingBottom: 120,
              display,
            }}>
            <FlatList
              data={profiles}
              renderItem={renderFriendItem(true, selectedProfiles, data =>
                setSelectedProfiles(data),
              )}
              numColumns={numColumns}
            />
          </View>
        </View>
        {!loading && (
          <View
            style={{position: 'absolute', bottom: 50, width: '100%', display}}>
            <View>
              <ButtonPrimary
                onPress={() => {
                  handleSubmit();
                }}
                title={'Next step  >'}
              />
            </View>
          </View>
        )}

        <View
          style={{
            flex: 1,
          }}></View>
      </View>
    </View>
  );
});
