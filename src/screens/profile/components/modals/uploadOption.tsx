import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {ButtonWhite} from '../../../../components/buttons';
import {black500, orange, white} from '../../../../styles/colors';
import {TextStyle} from '../../../../styles/textStyle';
import Feather from 'react-native-vector-icons/Feather';
interface IUploadOption {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const UploadOption = ({show, setShow}: IUploadOption) => {
  return (
    <Modal visible={show} transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: black500,
        }}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Feather
              name={'x-square'}
              size={25}
              onPress={() => setShow(false)}
            />
            <Text
              style={[
                TextStyle.semiBold,
                {color: orange, textAlign: 'center', fontSize: 18},
              ]}>
              Upload profile picture
            </Text>
            <Text style={[TextStyle.regular, {textAlign: 'center'}]}>
              Please make sure your face is not blurred or out of frame before
              continuing.
            </Text>

            <ButtonWhite
              //   onPress={handleCamera}
              containerStyle={styles.button}
              text={'Camera'}
            />
            <ButtonWhite
              //   onPress={handleGallery}
              containerStyle={styles.button}
              text={'Gallery'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: black500,
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: white,
    borderRadius: 4,
    justifyContent: 'center',
    padding: 32,
  },
  button: {
    marginTop: 15,
  },
});

export default UploadOption;
