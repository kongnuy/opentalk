import * as React from 'react';
import {SafeAreaView, View} from 'react-native';
import {BottomNavigation, Text, FAB} from 'react-native-paper';
import {
  HomeContent,
  HorizontalLinearGradientBottomBar,
  MyAppBarComponent,
  SearchContent,
} from '../_components';
import {primaryColor} from '../_helpers';

const MainContent = (props: any) => (
  <View style={{flex: 1}}>
    <MyAppBarComponent {...props} />
    <SafeAreaView>
      <View style={{padding: 15}}>{props.children}</View>
    </SafeAreaView>
  </View>
);

const HomeRoute = (props: any) => {
  return (
    <>
      <MainContent {...props}>
        <HomeContent {...props} />
      </MainContent>
      <FAB
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
          backgroundColor: primaryColor,
        }}
        icon="plus"
        onPress={() => props.navigation.navigate('PostCreate')}
      />
    </>
  );
};

const SearchRoute = (props: any) => {
  return (
    <MainContent {...props}>
      <SearchContent {...props} />
    </MainContent>
  );
};

const NotificationsRoute = (props: any) => {
  return (
    <MainContent {...props}>
      <Text>Notifications : Fonctionnalité non disponible !</Text>
    </MainContent>
  );
};

const MessagesRoute = (props: any) => {
  return (
    <MainContent {...props}>
      <Text>Messages : Fonctionnalité non disponible !</Text>
    </MainContent>
  );
};

export const Home = (props: any) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'music', title: 'Home', icon: 'home'},
    {key: 'search', title: 'Search', icon: 'magnify'},
    {key: 'notifications', title: 'Notifications', icon: 'bell-outline'},
    {key: 'messages', title: 'Messages', icon: 'email-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: (res: any) => <HomeRoute {...props} {...res} />,
    search: (res: any) => <SearchRoute {...props} {...res} />,
    messages: (res: any) => <MessagesRoute {...props} {...res} />,
    notifications: (res: any) => <NotificationsRoute {...props} {...res} />,
  });

  return (
    <HorizontalLinearGradientBottomBar>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        labeled={false}
        barStyle={{
          height: 60,
          backgroundColor: 'transparent',
        }}
      />
    </HorizontalLinearGradientBottomBar>
  );
};
