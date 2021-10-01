import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../../_helpers';

export const ButtonPrimary = ({onPress, title}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export const ButtonPrimarySmall = ({onPress, title}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={[
      styles.buttonContainer,
      {paddingVertical: 7, paddingHorizontal: 12, minWidth: 80},
    ]}>
    <Text style={[styles.buttonText, {fontSize: 10}]}>{title}</Text>
  </TouchableOpacity>
);

export const ButtonPrimarySmall2 = ({onPress, title}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={[
      styles.buttonContainer,
      {
        paddingVertical: 7,
        paddingHorizontal: 12,
        backgroundColor: 'rgba(165, 35, 199, .5)',
      },
    ]}>
    <Text style={[styles.buttonText, {fontSize: 10}]}>{title}</Text>
  </TouchableOpacity>
);

export const ButtonWhite = ({onPress, title}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={[styles.buttonWhiteContainer]}>
    <Text style={styles.buttonWhiteText}>{title}</Text>
  </TouchableOpacity>
);

export const ButtonWhiteGreyBorder = ({onPress, title}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={[
      styles.buttonWhiteContainer,
      {borderWidth: 1, borderColor: '#ccc'},
    ]}>
    <Text style={styles.buttonWhiteText}>{title}</Text>
  </TouchableOpacity>
);

export const ButtonWhiteTransparent = ({onPress, title}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={[
      styles.buttonWhiteContainer,
      {
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.5)',
        borderWidth: 1,
      },
    ]}>
    <Text style={[styles.buttonWhiteText, {color: '#fff'}]}>{title}</Text>
  </TouchableOpacity>
);
