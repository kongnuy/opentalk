import React from 'react';
import {View} from 'react-native';
import {MyAppBarSecondaryComponent} from '../_components';
import {CommentContent} from '../_components/Comment';

export const CommentDetails = (props: any) => {
  return (
    <>
      <MyAppBarSecondaryComponent onClick={() => props.navigation?.goBack()} />
      <View style={{flex: 1}}>
        <CommentContent {...props} />
      </View>
    </>
  );
};
