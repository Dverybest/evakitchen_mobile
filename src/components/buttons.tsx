import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
interface ButtonProps {
  title: string;
  marginBottom?: number;
  marginTop?: number;
  buttonProperty: {
    color: string;
    backgroundColor: string;
  };
}
export const Button = ({
  title,
  buttonProperty: {backgroundColor, color},
  marginBottom,
  marginTop,
}: ButtonProps) => {
  const orange = '#FF8D23';
  const styles = StyleSheet.create({
    button: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      flexDirection: 'row',
      borderWidth: 1,
      backgroundColor,
      borderColor: orange,
      marginTop,
      marginBottom,
    },
    text: {
      color,
    },
  });
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => console.log('Hello')}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
