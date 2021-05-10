import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {black, grey, orange, orange300, white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import profile from '../../assets/images/profile.png';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={{...TextStyle.semiBold, marginBottom: 32}}>Profile</Text>
      <View style={{alignItems: 'center', marginBottom: 32}}>
        <View style={styles.profileImageContainer}>
          {/* <View
            style={{
              backgroundColor: orange300,
              height: 156,
              width: 156,
              borderRadius: 78,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{...TextStyle.semiBold, fontSize: 40, color: white}}>CB</Text>
          </View> */}
          <Image source={profile} style={styles.image} />
          <View style={styles.cameraBox}>
            <TouchableOpacity>
              <Feather name="camera" color={white} size={13} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{...TextStyle.medium}}>Chisom Best</Text>
      </View>
      <TouchableOpacity style={styles.optionContainer}>
        <Text style={{...TextStyle.regular}}>Edit profile</Text>
        <SimpleLineIcons name="arrow-right" color={black} size={13} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer}>
        <Text style={{...TextStyle.regular}}>My orders</Text>
        <SimpleLineIcons name="arrow-right" color={black} size={13} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 33,
    paddingTop: 44,
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
    borderBottomColor: grey,
    flexDirection: 'row',
    marginBottom: 14,
  },
});
export default Profile;
