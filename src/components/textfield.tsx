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
import {grey, red, black, grey100} from '../styles/colors';
import {TextStyle as MyTextStyle} from '../styles/textStyle';
import Feather from 'react-native-vector-icons/Feather';
import { heightConverter, normalize, widthConverter } from '../utils/pxToDpConvert';

interface ITextFieldProps {
  password?: boolean;
  placeholder: string;
  containerStyle?: ViewStyle;
  mainContainerStyle?: ViewStyle;
  errorMessage?: string | boolean;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;
  value?: string;
  multiline?: boolean;
  editable?: boolean;
}
interface IStyles {
  textInputContainer: ViewStyle;
  textInput: TextStyle;
}
const styles = StyleSheet.create<IStyles>({
  textInputContainer: {
    height: heightConverter(50),
    borderRadius: 4,
    paddingHorizontal: widthConverter(15),
    borderWidth: 1,
    justifyContent: 'center',
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
  mainContainerStyle,
  errorMessage,
  keyboardType,
  value,
  onChangeText,
  multiline,
  editable,
}: ITextFieldProps) => {
  const [show, setShow] = useState<boolean>(false);
  let colorStyle = errorMessage
    ? {borderColor: red, color: black}
    : editable === false
    ? {borderColor: grey, color: black, backgroundColor: grey100}
    : {borderColor: grey, color: black};
  return (
    <View style={mainContainerStyle}>
      <View
        style={[
          styles.textInputContainer,
          colorStyle,
          containerStyle,
          errorMessage ? {marginBottom: heightConverter(6)} : {marginBottom: heightConverter(16)},
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={[styles.textInput, colorStyle]}
            secureTextEntry={password && !show ? true : false}
            placeholder={placeholder}
            placeholderTextColor={grey}
            value={value}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            multiline={multiline}
            editable={editable}
          />
          {password && (
            <Feather
              name={show ? 'eye' : 'eye-off'}
              color={black}
              size={heightConverter(22)}
              onPress={() => setShow(!show)}
            />
          )}
        </View>
      </View>
      {errorMessage ? (
        <Text
          style={{
            ...MyTextStyle.regular,
            lineHeight: normalize(18),
            marginBottom: heightConverter(15),
            color: red,
            fontSize: normalize(10),
          }}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};
