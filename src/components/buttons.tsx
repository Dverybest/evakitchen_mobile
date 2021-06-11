import React from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {black, orange, white} from '../styles/colors';
import {TextStyle as MyTextStyle} from '../styles/textStyle';
import googleIcon from '../assets/images/google.png';
import {PayWithFlutterwave} from 'flutterwave-react-native';
interface IButtonProps {
  text: string;
  containerStyle: ViewStyle;
  onPress?: () => void;
  textStyle?: TextStyle;
  transactionReference?: string;
  email?: string;
  amount?: number;
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
  textStyle,
}: IButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, containerStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export const ButtonWhite = ({
  text,
  containerStyle,
  onPress,
  textStyle,
}: IButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, containerStyle, styles.buttonWhite]}
      onPress={onPress}>
      <Text style={[styles.text, {color: orange}, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export const ButtonGoogle = ({text, containerStyle, onPress}: IButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, containerStyle, styles.buttonWhite]}
      onPress={onPress}>
      <Text style={[styles.text, {color: black}]}>{text}</Text>
      <Image
        source={googleIcon}
        style={[styles.image, {position: 'absolute', right: 34}]}
      />
    </TouchableOpacity>
  );
};

export const ButtonFlutterWave = ({
  transactionReference,
  email,
  amount,
  containerStyle,
  text,
}: IButtonProps) => {
  return (
    <View style={containerStyle}>
      <PayWithFlutterwave
        onRedirect={() => console.log(898)}
        options={{
          tx_ref: transactionReference ?? '',
          authorization: 'FLWPUBK_TEST-7753e6df013e9285a4d93a10b751b747-X',
          customer: {
            email: email ?? '',
          },
          amount: amount ?? 0,
          currency: 'NGN',
          payment_options: 'card',
        }}
        customButton={props => (
          <TouchableOpacity
            style={[styles.button]}
            onPress={props.onPress}
            disabled={props.disabled}>
            <Text style={[styles.text, {color: white}]}>{text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
