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
import {black, grey100, orange, white} from '../styles/colors';
import {TextStyle as MyTextStyle} from '../styles/textStyle';
import googleIcon from '../assets/images/google.png';
import {PayWithFlutterwave} from 'flutterwave-react-native';
interface IButtonProps {
  text: string;
  containerStyle: ViewStyle;
  onPress?: () => void;
  textStyle?: TextStyle;
  disabled?:boolean
}
interface IPaymentButtonProps extends IButtonProps {
  transactionReference?: string;
  email: string;
  amount: number;
  handleRedirect:(data:any)=>void
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
    ...MyTextStyle.regular,
    color: white,
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
  disabled,
  handleRedirect
}: IPaymentButtonProps) => {
  return (
    <View style={containerStyle}>
      <PayWithFlutterwave
        onRedirect={handleRedirect}
        options={{
          tx_ref: transactionReference ?? '',
          authorization: 'FLWPUBK-3c5ee58870fd0b2f7ccd603b36ad0a99-X',
          customer: {
            email: email ?? '',
          },
          amount: amount ?? 0,
          currency: 'NGN',
          payment_options: 'card'
        }}
        customButton={props => (
          <TouchableOpacity
            style={[styles.button,disabled?{backgroundColor:grey100}:{}]}
            onPress={props.onPress}
            disabled={disabled||props.disabled}>
            <Text style={[styles.text, {color: white}]}>{text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
