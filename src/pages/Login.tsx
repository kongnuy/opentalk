import {Auth} from 'aws-amplify';
import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {TextInput, withTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {appActions} from '../_actions';
import {
  ButtonPrimary,
  handleError,
  HorizontalLinearGradient,
  Logo,
  notAvailable,
} from '../_components';
import {primaryColor, styles} from '../_helpers';

export const Login = withTheme((props: any) => {
  const [freeze, setFreeze] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const model = useSelector(state => (state as any).app.model);
  const dispatch = useDispatch();

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
              <View></View>
              <View>
                {!freeze && (
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('Register')}>
                    <Text style={{color: '#fff', fontWeight: '500'}}>
                      Sign up
                    </Text>
                  </TouchableOpacity>
                )}
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
      <View style={styles.content}>
        <View
          style={{
            flex: 2,
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
            <Text style={styles.title}>
              {freeze ? 'Chargement ...' : 'Login'}
            </Text>
          </View>
          {!freeze && (
            <View
              style={{
                width: '100%',
              }}>
              <LoginFields
                {...{
                  email,
                  password,
                  setEmail,
                  setPassword,
                  hidePass,
                  setHidePass,
                }}
              />
            </View>
          )}
          {!freeze && (
            <View>
              <ButtonPrimary
                onPress={async () => {
                  if (!email || !password) {
                    Alert.alert(
                      'Erreur',
                      'Veuillez renseigner vos identifiants !',
                    );
                  } else {
                    try {
                      setFreeze(true);
                      await Auth.signIn(email, password);
                      model
                        .checkUser()
                        .then((m: any) =>
                          dispatch(appActions.replaceModelRequest(m)),
                        );
                      // setFreeze(false);
                    } catch (error) {
                      setFreeze(false);
                      handleError(
                        error,
                        'Identifiant ou mot de passe invalide !',
                      );
                    }
                  }
                }}
                title={'Confirm'}
              />
            </View>
          )}
        </View>
        <View
          style={{
            flex: 1,
          }}></View>
      </View>
    </View>
  );
});

const LoginFields = ({
  email,
  password,
  setEmail,
  setPassword,
  hidePass,
  setHidePass,
}) => {
  return (
    <View
      style={{
        width: '100%',
      }}>
      <TextInput
        label="Email"
        value={email}
        theme={{colors: {primary: primaryColor, text: primaryColor}}}
        keyboardType={'email-address'}
        onChangeText={setEmail}
        style={styles.inputStyle}
        right={<TextInput.Icon name="check" color={primaryColor} />}
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
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity onPress={notAvailable}>
          <Text style={{color: '#777', marginTop: 5}}>
            Forget your password?
          </Text>
        </TouchableOpacity>
      </View>

      {/*  <TextInputExample /> */}
    </View>
  );
};
