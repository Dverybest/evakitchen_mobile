import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ButtonWhite} from '../../../../components/buttons';
import {orange, white} from '../../../../styles/colors';
import {TextStyle} from '../../../../styles/textStyle';
import glass from '../../../../assets/images/glass.png';
import {ISelectedImage} from '../../../../interfaces/common';

interface ICheckImageQuality {
  handleCancel: () => void;
  setSeleted: React.Dispatch<React.SetStateAction<ISelectedImage>>;
  selected: any;
  handleOk: () => void;
}
const CheckImageQuality = ({
  handleCancel,
  setSeleted,
  selected,
  handleOk,
}: ICheckImageQuality) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 25,
        }}>
        <Text style={[TextStyle.semiBold, styles.title]}>
          Upload profile picture
        </Text>
        <TouchableOpacity onPress={handleCancel}>
          <Text
            style={[
              TextStyle.semiBold,
              {color: orange, fontSize: 16, lineHeight: 24},
            ]}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{paddingHorizontal: 25}}>
        <Image style={styles.image} source={{uri: selected.image.uri}} />

        <Image
          source={glass}
          style={{height: 64, width: 54, alignSelf: 'center'}}
        />
        <Text style={[TextStyle.semiBold, {textAlign: 'center'}]}>
          Check quality
        </Text>
        <Text style={[TextStyle.regular, {textAlign: 'center'}]}>
          Please make sure your face is not blurred or out of frame before
          continuing.
        </Text>
        <ButtonWhite
          containerStyle={styles.button}
          text={'Looks great! Save'}
          onPress={handleOk}
        />
        <TouchableOpacity
          onPress={() => setSeleted({show: false, image: null})}>
          <Text style={[TextStyle.medium, {color: orange}]}>
            Take a new photo
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
    backgroundColor: white,
  },
  title: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    flex: 1,
  },
  subTitle: {
    marginTop: 41,
    marginBottom: 24,
  },
  button: {
    marginBottom: 16,
    marginTop: 73,
  },
  image: {
    height: 240,
    width: 210,
    borderRadius: 12,
    marginTop: 41,
    marginBottom: 24,
    alignSelf: 'center',
  },
});
export default CheckImageQuality;
