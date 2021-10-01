import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {
  ButtonWhite,
  ButtonWhiteTransparent,
  Logo,
  VerticalLinearGradient,
} from '../_components';
import {styles} from '../_helpers';

export const WelcomeEmpty = ({replaceModel, model}) => {
  useEffect(() => {
    model.checkUser().then(replaceModel);
  }, []);

  return (
    <>
      <StatusBar backgroundColor={'#7104db'} />
      <VerticalLinearGradient>
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              maxHeight: 500,
            }}>
            <Logo />
          </View>
        </View>
      </VerticalLinearGradient>
    </>
  );
};

export const Welcome = (props: any) => {
  return (
    <>
      <StatusBar backgroundColor={'#7104db'} />
      <VerticalLinearGradient>
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              maxHeight: 500,
            }}>
            <Logo />
            <Text style={styles.textCTA}>
              Follow your best friends and exchange great messages about your
              activities and experiences{' '}
            </Text>
            <View>
              <ButtonWhite
                title="Login In"
                onPress={() => props.navigation.navigate('Login')}
              />
              <View style={{height: 20}}></View>
              <ButtonWhiteTransparent
                title="Create Account"
                onPress={() => props.navigation.navigate('Register')}
              />
            </View>

            <Text style={[styles.textCTA, {paddingVertical: 10}]}>
              Hosted by Kola
            </Text>
          </View>
        </View>
      </VerticalLinearGradient>
    </>
  );
};
