import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native';

interface TextFieldProps {
  password?: boolean;
  placeholder: string;
  marginTop?: number;
  marginBottom?: number;
}
export const TextField = ({
  password,
  placeholder,
  marginBottom,
  marginTop,
}: TextFieldProps) => {
  const styles = StyleSheet.create({
    textInput: {
      height: 50,
      borderRadius: 25,
      paddingLeft: 29,
      borderWidth: 1,
      borderColor: '#E5E5E5',
      marginBottom,
      marginTop,
    },
  });
  return (
    <View>
      <TextInput
        style={styles.textInput}
        secureTextEntry={password ? true : false}
        placeholder={placeholder}
        placeholderTextColor="#E5E5E5"
      />
    </View>
  );
};
