import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {ButtonWhite} from '../../../../components/buttons';
import {black500, orange, white} from '../../../../styles/colors';
import {TextStyle} from '../../../../styles/textStyle';
import Feather from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CheckImageQuality from './checkImageQuality';
import {ISelectedImage} from '../../../../interfaces/common';
interface IUploadOption {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleUpload: (photo: any, setSelected: any) => void;
}

const UploadOption = ({show, setShow, handleUpload}: IUploadOption) => {
  const [selected, setSelected] = useState<ISelectedImage>({
    show: false,
    image: null,
  });
  const handleOk = () => {
    handleUpload(selected.image, setSelected);
  };
  const handleCancel = () => {
    setSelected({show: false, image: null});
    setShow(false);
  };
  const handleCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        maxWidth: 210,
        maxHeight: 240,
      },
      response => {
        if (response.errorCode) {
          console.log(response.errorMessage);
        } else if (response.uri) {
          setSelected({show: true, image: response});
        }
      },
    );
  };
  const handleGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 210,
        maxHeight: 240,
      },
      response => {
        if (response.errorCode) {
          console.log(response.errorMessage);
        } else if (response.uri) {
          setSelected({show: true, image: response});
        }
      },
    );
  };
  return (
    <Modal visible={show} transparent={true}>
      {selected.show ? (
        <CheckImageQuality
          handleCancel={handleCancel}
          handleOk={handleOk}
          setSeleted={setSelected}
          selected={selected}
        />
      ) : (
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
                style={{alignSelf: 'flex-end'}}
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
                onPress={handleCamera}
                containerStyle={styles.button}
                text={'Camera'}
              />
              <ButtonWhite
                onPress={handleGallery}
                containerStyle={styles.button}
                text={'Gallery'}
              />
            </View>
          </View>
        </View>
      )}
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
