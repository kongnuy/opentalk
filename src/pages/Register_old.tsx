import React, {useCallback, useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput, withTheme} from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';
import {
  ButtonPrimary,
  CameraIcon,
  HorizontalLinearGradient,
  ImagePickerModal,
  Logo,
} from '../_components';
import {primaryColor, styles} from '../_helpers';

export const Register = withTheme((props: any) => {
  const [pickerResponse, setPickerResponse] = useState<any>(null);
  const [visible, setVisible] = useState(false);

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

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [hidePass, setHidePass] = useState(true);
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
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
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: '#fff'}}>Step</Text>
                    <View
                      style={{
                        width: 16,
                        height: 8,
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 4,
                        backgroundColor: '#fff',
                      }}></View>
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 4,
                      }}></View>
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 4,
                      }}></View>
                  </View>
                  <View
                    style={{
                      flex: 3,
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('Login')}>
                      <Text style={{color: '#fff', fontWeight: '500'}}>
                        Sign In
                      </Text>
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
                }}>
                <Text style={styles.title}>Create Account</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
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
              <View
                style={{
                  width: '100%',
                  backgroundColor: '#fff',
                }}>
                <RegisterFields
                  {...{
                    name,
                    setName,
                    email,
                    password,
                    setEmail,
                    setPassword,
                    password2,
                    setPassword2,
                    hidePass,
                    setHidePass,
                  }}
                />
              </View>
              <View style={{marginTop: 30}}>
                <ButtonPrimary
                  onPress={() => {
                    if (!name || !email || !password) {
                      Alert.alert(
                        'Erreur !',
                        'Veuillez renseigner tous les champs',
                      );
                    } else if (!uri) {
                      Alert.alert('Erreur !', 'Veuillez choisir une photo');
                    } else if (password !== password2) {
                      Alert.alert(
                        'Erreur !',
                        'Les mot de passes doivent être identiques',
                      );
                    } else {
                      props.setRoute({
                        key: 'categories',
                        params: {
                          ...props.appRoute.params,
                          name,
                          email,
                          password,
                          uri,
                        },
                      });
                    }
                  }}
                  title={'Confirm'}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}></View>
          </View>
        </View>
      </KeyboardAvoidingView>
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </>
  );
});

const RegisterFields = ({
  name,
  setName,
  email,
  password,
  setEmail,
  setPassword,
  password2,
  setPassword2,
  hidePass,
  setHidePass,
}) => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#fff',
      }}>
      <TextInput
        label="Name"
        value={name}
        theme={{
          colors: {
            primary: primaryColor,
            text: primaryColor,
            background: '#fff',
          },
        }}
        onChangeText={setName}
        style={styles.inputStyle}
        right={<TextInput.Icon name="check" color={primaryColor} />}
      />
      <TextInput
        label="Your Email"
        value={email}
        theme={{colors: {primary: primaryColor, text: primaryColor}}}
        keyboardType={'email-address'}
        onChangeText={setEmail}
        style={styles.inputStyle}
      />
      <TextInput
        label="Your password"
        value={password}
        secureTextEntry={hidePass}
        theme={{colors: {primary: primaryColor, text: primaryColor}}}
        onChangeText={setPassword}
        style={styles.inputStyle}
        right={
          <TextInput.Icon
            name={hidePass ? 'eye-off' : 'eye'}
            color={primaryColor}
            onPress={() => setHidePass(!hidePass)}
          />
        }
      />
      <TextInput
        label="Confirm password"
        value={password2}
        secureTextEntry={hidePass}
        theme={{colors: {primary: primaryColor, text: primaryColor}}}
        onChangeText={setPassword2}
        style={styles.inputStyle}
        right={
          <TextInput.Icon
            name={hidePass ? 'eye-off' : 'eye'}
            color={primaryColor}
            onPress={() => setHidePass(!hidePass)}
          />
        }
      />
    </View>
  );
};
