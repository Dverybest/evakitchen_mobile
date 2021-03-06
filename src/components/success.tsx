import React from 'react';
import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import CardStyle from '../styles/cardStyle';
import {green, white} from '../styles/colors';
import success from '../assets/images/success.png';
import {TextStyle} from '../styles/textStyle';
import {ButtonPrimary} from './buttons';
interface SuccessProps {
  visible: boolean;
  text: string;
  title?: string;
  buttonText?: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    ...CardStyle.card,
    alignItems: 'center',
    backgroundColor: white,
  },
  image: {
    height: 83,
    width: 83,
    marginTop: 85,
  },
});
const Success = ({visible, title, onPress, buttonText, text}: SuccessProps) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={success} style={styles.image} />
          <Text
            style={{
              marginTop: 27,
              ...TextStyle.semiBold,
              color: green,
              fontSize: 18,
            }}>
            {title || 'Successful'}
          </Text>
          <Text
            style={{
              ...TextStyle.regular,
              marginTop: 35,
              marginBottom: 89,
              fontSize: 16,
            }}>
            {text}
          </Text>
        </View>
        <ButtonPrimary
          text={buttonText || 'Ok'}
          containerStyle={{marginTop: 70}}
          onPress={onPress}
        />
      </View>
    </Modal>
  );
};

export default Success;
