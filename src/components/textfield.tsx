import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
  TextInput,
  View,
  KeyboardTypeOptions,
} from 'react-native';
import {grey, red, black} from '../styles/colors';
import {TextStyle as MyTextStyle} from '../styles/textStyle';
import Feather from 'react-native-vector-icons/Feather';

interface ITextFieldProps {
  password?: boolean;
  placeholder: string;
  containerStyle?: ViewStyle;
  errorMessage?: boolean;
  keyboardType?:KeyboardTypeOptions
}
interface IStyles {
  textInputContainer: ViewStyle;
  textInput: TextStyle;
}
const styles = StyleSheet.create<IStyles>({
  textInputContainer: {
    height: 50,
    borderRadius: 4,
    paddingHorizontal: 25,
    borderWidth: 1,
    marginBottom: 16,
  },
  textInput: {
    ...MyTextStyle.regular,
    flex: 1,
  },
});

export const TextField = ({
  password,
  placeholder,
  containerStyle,
  errorMessage,
  keyboardType
}: ITextFieldProps) => {
  const [show, setShow] = useState<boolean>(false);
  let colorStyle = errorMessage
    ? {borderColor: red, color: red}
    : {borderColor: grey, color: black};
  return (
    <View style={[styles.textInputContainer, colorStyle, containerStyle]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          style={[styles.textInput, colorStyle]}
          secureTextEntry={password && !show ? true : false}
          placeholder={placeholder}
          placeholderTextColor={grey}
          keyboardType={keyboardType}
        />
        {password && (
          <Feather
            name={show ? 'eye' : 'eye-off'}
            color={black}
            size={22}
            onPress={() => setShow(!show)}
          />
        )}
      </View>
      {errorMessage ? (
        <Text
          style={{
            color: red,
            fontSize: 10,
            lineHeight: 18,
            marginTop: 6,
            marginLeft: 30,
            fontFamily: 'Poppins-Medium',
          }}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};
