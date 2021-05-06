import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {StyleSheet, View, Text, Image,ScrollView, TouchableOpacity} from 'react-native';
import logo from '../../assets/images/logo.png';
import { ButtonPrimary, ButtonWhite } from '../../components/buttons';
import {TextField} from '../../components/textfield';
import {orange, white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';

const SignUp = () => {
    const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text style={TextStyle.semiBold}>Create your account</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={TextStyle.medium}>
        Please log in to continue from where you stopped
      </Text>
      <TextField placeholder="Fullname" containerStyle={{marginTop: 50}} />
      <TextField keyboardType={'email-address'} placeholder="Email"  />
      <TextField keyboardType={'phone-pad'} placeholder="Phone number" />
      <TextField placeholder="Password" password={true} />
      <ButtonPrimary
            text="Sign In"
            containerStyle={{marginBottom:31,marginTop:20}}
            onPress={() => console.log('Hiii')}
          />
          <ButtonWhite
            text="Sign In with Google"
            containerStyle={{marginBottom:50}}
          />
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => navigate('SignIn')}>
            <Text style={TextStyle.regular}>
              {`Already have an account? `}
              <Text style={[TextStyle.regular,{color: orange}]}>
                Sign In
              </Text>
            </Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: 25,
    paddingTop: 18,
  },
  image: {
    height: 48,
    width: 48,
    resizeMode: 'contain',
  },
});
export default SignUp;
