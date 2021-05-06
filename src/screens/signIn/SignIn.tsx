import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {white, orange, black} from '../../styles/colors';
import {ButtonPrimary,ButtonWhite} from '../../components/buttons';
import {TextField} from '../../components/textfield';
import logo from '../../assets/images/logo.png';
import {useNavigation} from '@react-navigation/core';
import { TextStyle } from '../../styles/textStyle';

const SignIn = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.image} />
        <Text style={styles.header}>Welcome back</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headerTitle}>
            Please log in to continue from where you stopped
          </Text>
          <TextField placeholder="Email" containerStyle={{marginTop:50}} />
          <TextField placeholder="Password"  password={true} />
          <TouchableOpacity>
            <Text
              style={{
                color: orange,
                marginLeft: 20,
                ...TextStyle.regular,
              }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
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
            onPress={() => navigate('SignUp')}>
            <Text style={TextStyle.regular}>
              {`Don’t have an account? `}
              <Text style={[TextStyle.regular,{color: orange}]}>
                Sign up
              </Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 25,
    backgroundColor: white,
  },
  header: {
    ...TextStyle.semiBold,
    marginBottom: 20,
  },
  headerTitle: {
    ...TextStyle.medium,
    width: 281,
  },
  image: {
    height: 48,
    width: 48,
    resizeMode: 'contain',
    marginTop: 18,
  },
});
export default SignIn;
