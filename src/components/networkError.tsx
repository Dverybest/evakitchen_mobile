import React from 'react';
import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import CardStyle from '../styles/cardStyle';
import {red, white} from '../styles/colors';
import maintenance from '../assets/images/maintenance.png';
import internetError from '../assets/images/internetError.png';
import {TextStyle} from '../styles/textStyle';
import {ButtonPrimary} from './buttons';

interface NetworkError {
  visible: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  errorType: string;
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
    paddingHorizontal: 40,
  },
  image: {
    height: 147,
    width: 226,
    marginTop: 38,
  },
});
const NetworkError = ({visible, setVisibility, errorType}: NetworkError) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={
              errorType === 'Maintenance Error'
                ? maintenance
                : errorType === 'Network Error'
                ? internetError
                : null
            }
            style={styles.image}
          />
          <Text
            style={{
              marginTop: 27,
              ...TextStyle.semiBold,
              color: red,
              fontSize: 18,
            }}>
            Something went wrong
          </Text>
          <Text
            style={{
              ...TextStyle.regular,
              marginTop: 16,
              marginBottom: 89,
              fontSize: 16,
              textAlign: 'center',
            }}>
            {errorType === 'Maintenance Error'
              ? 'We are working on fixing the problem. Please try again.'
              : errorType === 'Network Error'
              ? 'Check your internet connection and try again.'
              : null}
          </Text>
        </View>
        <ButtonPrimary
          text="Try again"
          containerStyle={{marginTop: 70}}
          onPress={() => setVisibility(false)}
        />
      </View>
    </Modal>
  );
};

export default NetworkError;