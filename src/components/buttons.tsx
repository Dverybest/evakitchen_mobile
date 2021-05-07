import React from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {black, orange, white} from '../styles/colors';
import {TextStyle as MyTextStyle} from '../styles/textStyle';
import googleIcon from '../assets/images/google.png'
interface IButtonProps {
  text: string;
  containerStyle:ViewStyle,
  onPress?: ()=> void;
  textStyle?:TextStyle
}
interface IStyles {
  button: ViewStyle;
  text: TextStyle;
  buttonWhite: ViewStyle;
  image: ImageStyle;
}

const styles = StyleSheet.create<IStyles>({
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    backgroundColor: orange,
  },
  text: {
    color: white,
    ...MyTextStyle.regular,
    fontSize: 14,
  },
  buttonWhite: {
    backgroundColor: white,
    borderColor: orange,
    borderWidth: 1,
  },
  image: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});

export const ButtonPrimary = ({
  text,
  containerStyle,
  onPress,
  textStyle
}: IButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button,containerStyle]}
      onPress={onPress}>
      <Text style={[styles.text,textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export const ButtonWhite = ({
  text,
  containerStyle,
  onPress,
  textStyle
}: IButtonProps) => {
  
  return (
    <TouchableOpacity
      style={[styles.button, containerStyle, styles.buttonWhite]}
      onPress={onPress}>
      <Text style={[styles.text,{color:black},textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export const ButtonGoogle = ({text, containerStyle, onPress}: IButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, containerStyle, styles.buttonWhite]}
      onPress={onPress}>
      <Text style={[styles.text, {color: black}]}>{text}</Text>
      <Image source={googleIcon} style={[styles.image, {position: "absolute", right: 34}]} />
    </TouchableOpacity>
  );
};
