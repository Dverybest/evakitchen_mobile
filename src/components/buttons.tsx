import React from 'react'
import {StyleSheet,Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import { black, orange, white } from '../styles/colors';
import { TextStyle as MyTextStyle } from '../styles/textStyle';
interface IButtonProps {
  text: string;
  containerStyle:ViewStyle,
  onPress?: ()=> void;
}
interface IStyles{
  button:ViewStyle,
  text:TextStyle,
  buttonWhite:ViewStyle
}

const styles = StyleSheet.create<IStyles>({
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    backgroundColor:orange,
  },
  text: {
    color:white,
    ...MyTextStyle.regular,
    fontSize:14
  },
  buttonWhite:{
    backgroundColor:white,
    borderColor:orange,
    borderWidth:1
  }
});

export const ButtonPrimary = ({
  text,
  containerStyle,
  onPress
}: IButtonProps) => {
  
  return (
    <TouchableOpacity
      style={[styles.button,containerStyle]}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export const ButtonWhite = ({
  text,
  containerStyle,
  onPress
}: IButtonProps) => {
  
  return (
    <TouchableOpacity
      style={[styles.button,containerStyle,styles.buttonWhite]}
      onPress={onPress}>
      <Text style={[styles.text,{color:black}]}>{text}</Text>
    </TouchableOpacity>
  );
};

