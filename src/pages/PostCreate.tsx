import React, {useCallback, useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Switch, TextInput} from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';
import {
  ButtonPrimary,
  ButtonWhiteGreyBorder,
  CameraIcon,
  handleError,
  ImagePickerModal,
  MyAppBarSecondaryComponent,
} from '../_components';
import {primaryColor, styles} from '../_helpers';
import {API, Auth, graphqlOperation, Storage} from 'aws-amplify';
import {createPost} from '../graphql/mutations';
import {listProfiles} from '../graphql/queries';
import {useNavigation} from '@react-navigation/native';

export const PostCreate = (props: any) => {
  const [loading, setLoading] = useState(false);
  const [pickerResponse, setPickerResponse] = useState<any>(null);
  const [visible, setVisible] = useState(false);
  const [desc, setDescription] = useState('');
  const [checked, setChecked] = useState(false);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;
  const navigation = useNavigation();
  const handleSubmit = async () => {
    setLoading(true);
    const user = await Auth.currentAuthenticatedUser();
    try {
      let img: any = null;
      if (uri) {
        const nms = uri.split('/');
        const nm = nms[nms.length - 1];
        const response = await fetch(uri);
        const blob = await response.blob();
        console.log('uri: ', uri);
        const result = await Storage.put(
          '/public/postsimages/' + Date.now() + '_' + nm,
          blob,
          {
            level: 'public',
          },
        );
        img = (result as any).key;
      }

      const profil = await API.graphql(
        graphqlOperation(listProfiles, {
          filter: {userId: {eq: user.attributes.sub}},
        }),
      );
      const profileId = (profil as any)?.data?.listProfiles?.items[0].id;
      await API.graphql(
        graphqlOperation(createPost, {
          input: {
            img,
            profileId,
            text: desc,
            public: checked,
          },
        }),
      );
      setLoading(false);
      (navigation as any).navigate('Home', {
        refresh: true,
      });
    } catch (err) {
      setLoading(false);
      handleError(err);
    }
  };

  const onImageLibraryPress = useCallback(() => {
    const options: any = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse as any);
  }, []);

  const onCameraPress = React.useCallback(() => {
    const options: any = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setPickerResponse as any);
  }, []);

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <StatusBar backgroundColor={'#7104db'} />
      <MyAppBarSecondaryComponent />
      {loading && (
        <View style={[{flex: 1, padding: 15}]}>
          <Text>Chargement ...</Text>
        </View>
      )}
      {!loading && (
        <View style={[{flex: 1, padding: 15}]}>
          <TextInput
            multiline
            mode="outlined"
            placeholder={'Text content ... '}
            numberOfLines={5}
            value={desc}
            onChangeText={Description => {
              setDescription(Description);
            }}
          />
          <View
            style={[
              styles.flexCenter,
              {
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingVertical: 15,
              },
            ]}>
            <Switch
              value={checked}
              color={primaryColor}
              onValueChange={setChecked}
            />
            <Text style={{paddingHorizontal: 10}}>Rendre ce post public</Text>
          </View>
          <View style={[styles.flexCenter, {width: '100%'}]}>
            <TouchableOpacity onPress={() => setVisible(true)}>
              {!uri && (
                <View
                  style={[
                    styles.flexCenter,
                    {
                      width: 70,
                      height: 70,
                      borderWidth: 1,
                      borderColor: '#ccc',
                      borderRadius: 35,
                      backgroundColor: 'rgba(165, 35, 199, .1)',
                      marginVertical: 25,
                    },
                  ]}>
                  <CameraIcon color={primaryColor} size={20} />
                </View>
              )}
              {uri && (
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    overflow: 'hidden',
                    borderColor: '#ffffff',
                    borderWidth: 4,
                    borderRadius: 35,
                  }}
                  source={{uri}}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 30}}>
            <ButtonPrimary
              onPress={() => {
                if (!desc) {
                  Alert.alert(
                    'Erreur !',
                    'Veuillez renseigner au moins le contenu de la publication.',
                  );
                } else {
                  handleSubmit();
                }
              }}
              title={'Confirm'}
            />
          </View>
          <View style={{paddingVertical: 15}}>
            <ButtonWhiteGreyBorder
              onPress={() => {
                props.setRoute({
                  key: 'home',
                });
              }}
              title={'Cancel'}
            />
          </View>
        </View>
      )}
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </KeyboardAvoidingView>
  );
};
