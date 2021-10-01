/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Categories,
  CommentDetails,
  Friends,
  Home,
  Login,
  PostCreate,
  ProfilePage,
  Register,
  Secondary,
  Welcome,
  WelcomeEmpty,
} from '../pages';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from '../_helpers';
import {connector} from '../_reducers';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

const SimpleApp = connector((props: any) => {
  if (props.model.userLoading) {
    return <WelcomeEmpty {...props} />;
  }
  const isSignedIn = props.model?.user?.username;
  return (
    <>
      <StatusBar backgroundColor={'#7104db'} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{title: 'Home'}}
              />
              <Stack.Screen
                name="PostCreate"
                component={PostCreate}
                options={{title: 'PostCreate'}}
              />
              <Stack.Screen
                name="Secondary"
                component={Secondary}
                options={{title: 'Secondary'}}
              />
              <Stack.Screen
                name="CommentDetails"
                component={CommentDetails}
                options={{title: 'commentDetails'}}
              />
              <Stack.Screen
                name="ProfilePage"
                component={ProfilePage}
                options={{title: 'profilePage'}}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{title: 'Welcome'}}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{title: 'Login'}}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{title: 'Register'}}
              />
              <Stack.Screen
                name="Friends"
                component={Friends}
                options={{title: 'Friends'}}
              />
              <Stack.Screen
                name="Categories"
                component={Categories}
                options={{title: 'Categories'}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
});

export const App = () => {
  return (
    <Provider store={store}>
      <SimpleApp />
    </Provider>
  );
};
