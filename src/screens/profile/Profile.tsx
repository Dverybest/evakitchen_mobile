import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {grey100, orange, orange300, white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import UploadOption from './components/modals/uploadOption';
import {Header} from '../../components/header';
import {TextField} from '../../components/textfield';
import {ButtonPrimary} from '../../components/buttons';

const Profile = () => {
  const [showUploadOption, setShowUploadOption] = useState(false);
  const [photoUrl, setPhotoUrl] = useState('');
  const handleUpload = (photo: any, setSelected: any) => {
    setPhotoUrl(photo.uri);
    setSelected({show: false});
    setShowUploadOption(false);
  };

  return (
    <View style={{backgroundColor: white, flex: 1}}>
      <Header title="Profile" />
      <ScrollView>
        <View style={styles.container}>
          <UploadOption
            show={showUploadOption}
            setShow={setShowUploadOption}
            handleUpload={handleUpload}
          />
          <View style={{alignItems: 'center', marginBottom: 32}}>
            <View style={styles.profileImageContainer}>
              {photoUrl !== '' ? (
                <Image source={{uri: photoUrl}} style={styles.image} />
              ) : (
                <View
                  style={{
                    backgroundColor: orange300,
                    height: 156,
                    width: 156,
                    borderRadius: 78,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{...TextStyle.semiBold, fontSize: 40, color: white}}>
                    CB
                  </Text>
                </View>
              )}

              <View style={styles.cameraBox}>
                <TouchableOpacity>
                  <Feather
                    name="camera"
                    color={white}
                    size={13}
                    onPress={() => setShowUploadOption(true)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TextField
            placeholder="Name"
            containerStyle={{}}
            value="Chisom Best"
          />
          <TextField
            placeholder="Email"
            containerStyle={{}}
            value="c.best@gmail.com"
          />
          <TextField placeholder="eg. 07061011343" containerStyle={{}} />
          <TextField
            placeholder="eg. 07061011343"
            containerStyle={{height: 85}}
            multiline={true}
          />
          <ButtonPrimary
            text="Save"
            containerStyle={{marginBottom: 35, marginTop: 25}}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 33,
    paddingTop: 44,
    backgroundColor: white,
  },
  profileImageContainer: {
    height: 156,
    width: 156,
    marginBottom: 10,
  },
  image: {
    height: 156,
    width: 156,
    borderRadius: 78,
  },
  cameraBox: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: orange,
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionContainer: {
    height: 54,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: grey100,
    flexDirection: 'row',
  },
});
export default Profile;
