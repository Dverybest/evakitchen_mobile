import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {grey, red, black} from '../styles/colors';

interface TextFieldProps {
  password?: boolean;
  placeholder: string;
  marginTop?: number;
  marginBottom?: number;
  errorMessage?: boolean;
}
export const TextField = ({
  password,
  placeholder,
  marginBottom,
  marginTop,
  errorMessage,
}: TextFieldProps) => {
  const styles = StyleSheet.create({
    textInput: {
      height: 50,
      borderRadius: 25,
      paddingLeft: 29,
      borderWidth: 1,
      borderColor: errorMessage ? red : grey,
      marginBottom,
      marginTop,
      color: errorMessage ? red : black,
      fontFamily: 'Poppins-Medium',
    },
  });
  return (
    <View>
      {errorMessage ? (
        <View>
          <TextInput
            style={styles.textInput}
            secureTextEntry={password ? true : false}
            placeholder={placeholder}
            placeholderTextColor={grey}
          />
          <Text
            style={{
              color: red,
              fontSize: 10,
              lineHeight: 18,
              marginTop: 6,
              marginLeft: 30,
              fontFamily: 'Poppins-Medium',
            }}>
            Invalid credentials
          </Text>
        </View>
      ) : (
        <TextInput
          style={styles.textInput}
          secureTextEntry={password ? true : false}
          placeholder={placeholder}
          placeholderTextColor={grey}
        />
      )}
    </View>
  );
};
