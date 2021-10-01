import {useIsFocused, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {PostContent, MyAppBarSecondaryComponent} from '../_components';

export const Secondary = (props: any) => {
  const navigation = useNavigation();
  return (
    <>
      <MyAppBarSecondaryComponent
        onClick={() =>
          (navigation as any).navigate('Home', {
            refresh: true,
          })
        }
      />
      <View style={{flex: 1}}>
        <PostContent {...props} />
      </View>
    </>
  );
};
