import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  black,
  black300,
  grey100,
  orange,
  orange300,
  white,
} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import {AuthContext} from '../../context/authContext';
import {ActionType} from '../../context/enums';
import UploadOption from './components/modals/uploadOption';

const Profile = () => {
  const {dispatchAuthState} = useContext(AuthContext);
  const {navigate} = useNavigation();
  const [showUploadOption, setShowUploadOption] = useState(false);
  const [photoUrl, setPhotoUrl] = useState('');
  const handleUpload = (photo: any, setSelected: any) => {
    setPhotoUrl(photo.uri);
    setSelected({show: false});
    setShowUploadOption(false);
  };

  return (
    <>
      <View style={styles.container}>
        <UploadOption
          show={showUploadOption}
          setShow={setShowUploadOption}
          handleUpload={handleUpload}
        />
        <View
          style={{
            marginBottom: 32,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{...TextStyle.semiBold}}>Profile</Text>
          <Feather
            name="log-out"
            color={black300}
            size={25}
            onPress={() =>
              dispatchAuthState({type: ActionType.LOG_OUT, payload: null})
            }
          />
        </View>
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
          <Text style={{...TextStyle.medium}}>Chisom Best</Text>
        </View>
        <TouchableOpacity style={styles.optionContainer}>
          <Text style={{...TextStyle.regular}}>Edit profile</Text>
          <SimpleLineIcons name="arrow-right" color={black} size={13} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => navigate('MyOrders')}>
          <Text style={{...TextStyle.regular}}>My orders</Text>
          <SimpleLineIcons name="arrow-right" color={black} size={13} />
        </TouchableOpacity>
      </View>
    </>
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
    marginBottom: 32,
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
