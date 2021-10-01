import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

export const HorizontalLinearGradient: React.FC = ({children}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#7104db', '#a523c7']}
      style={styles.gradient}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

export const HorizontalLinearGradientBottomBar: React.FC = ({children}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#7104db', '#a523c7']}
      style={styles.gradient}>
      {children}
    </LinearGradient>
  );
};

export const HorizontalLinearGradientAppBar: React.FC = ({children}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#7104db', '#a523c7']}
      style={styles.gradient}>
      <SafeAreaView style={[styles.container, {marginHorizontal: 0}]}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};
export const HorizontalLinearGradientStatusBar: React.FC = ({children}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#7104db', '#a523c7']}>
      {children}
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
});
