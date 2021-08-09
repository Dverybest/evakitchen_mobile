import React, {useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking
} from 'react-native';
import {black, orange100, red, white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import {AccountOption} from './components/accountOption';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from '../../context/authContext';
import {ActionType} from '../../context/enums';
import {useNavigation} from '@react-navigation/core';
import { heightConverter, widthConverter } from '../../utils/pxToDpConvert';

const Account = () => {
  const {navigate} = useNavigation();
  const {dispatchAuthState} = useContext(AuthContext);
  return (
    <View style={{flex: 1, backgroundColor: white}}>
        <Text style={{...TextStyle.semiBold,marginLeft:widthConverter(25), marginVertical: heightConverter(20)}}>Account</Text>
      <ScrollView>
        <View style={styles.container}>
          <View >
            <View>
              <Text style={{...TextStyle.medium, marginBottom: heightConverter(12)}}>
                Profile
              </Text>
              <View
                style={{
                  backgroundColor: orange100,
                  paddingHorizontal: widthConverter(18),
                  borderRadius: 1,
                }}>
                <AccountOption
                  title="Edit Profile"
                  onPress={() => navigate('Profile')}
                />
                {/* <AccountOption
                  title="Change Password"
                  onPress={() => console.log('hello')}
                />
                <AccountOption
                  title="Recovery Mail"
                  onPress={() => console.log('hello')}
                /> */}
              </View>
            </View>
            {/* <View>
              <Text
                style={{...TextStyle.medium, marginTop: 44, marginBottom: 12}}>
                Favourites
              </Text>
              <View
                style={{
                  backgroundColor: orange100,
                  paddingHorizontal: 18,
                  borderRadius: 1,
                }}>
                <AccountOption
                  title="Favourites"
                  onPress={() => navigate('Favourites')}
                />
              </View>
            </View> */}
            <View>
              <Text
                style={{...TextStyle.medium, marginTop: heightConverter(44), marginBottom: widthConverter(12)}}>
                Policies
              </Text>
              <View
                style={{
                  backgroundColor: orange100,
                  paddingHorizontal: widthConverter(18),
                  borderRadius: 1,
                }}>
                  <AccountOption
                    title="About Us"
                    onPress={() => Linking.openURL('https://eva-kitchen.herokuapp.com/about')}
                    icon={
                      <EvilIcons name="external-link" color={black} size={heightConverter(20)} />
                    }
                  />
                   <AccountOption
                    title="Contact Us"
                    onPress={() => Linking.openURL('https://eva-kitchen.herokuapp.com/contact-us')}
                    icon={
                      <EvilIcons name="external-link" color={black} size={heightConverter(20)} />
                    }
                  />
                <AccountOption
                  title="Terms and Conditions"
                  onPress={() => Linking.openURL('https://eva-kitchen.herokuapp.com')}
                  icon={
                    <EvilIcons name="external-link" color={black} size={heightConverter(20)} />
                  }
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                marginTop: heightConverter(35),
                marginBottom: heightConverter(35),
                flexDirection: 'row',
                alignSelf: 'center',
              }}
              onPress={() =>
                dispatchAuthState({type: ActionType.LOG_OUT, payload: null})
              }>
              <Feather name="log-out" color={red} size={heightConverter(25)} />
              <Text style={{...TextStyle.medium, color: red,marginLeft:widthConverter(7)}}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: widthConverter(25),
  },
});

export default Account;
