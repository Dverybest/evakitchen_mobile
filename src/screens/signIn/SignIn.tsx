import React from 'react';
import {StyleSheet, View, Text, Image, Touchable} from 'react-native';
import {white, orange, black} from '../../styles/colors';
import {Button} from '../../components/buttons';
import {TextField} from '../../components/textfield';
import logo from '../../assets/images/logo.png';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

const SignIn = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.image} />
        <Text style={styles.header}>Welcome back</Text>
        <ScrollView>
          <Text style={styles.headerTitle}>
            Please log in to continue from where you stopped
          </Text>
          <TextField placeholder="Email" marginTop={51} />
          <TextField placeholder="Password" password marginTop={31} />
          <TouchableOpacity>
            <Text
              style={{
                color: orange,
                marginLeft: 20,
                marginTop: 18,
                fontFamily: 'Poppins-Regular',
              }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <Button
            title="Sign In"
            buttonProperty={{color: white, backgroundColor: orange}}
            marginBottom={31}
            marginTop={20}
            onPress={() => console.log('Hiii')}
          />
          <Button
            title="Sign In with Google"
            buttonProperty={{color: black, backgroundColor: white}}
            marginBottom={50}
          />
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => navigate('SignUp')}>
            <Text style={{fontSize: 16, fontFamily: 'Poppins-Regular'}}>
              {`Don’t have an account? `}
              <Text style={{color: orange, fontFamily: 'Poppins-Regular'}}>
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
    color: '#000000',
    fontSize: 28,
    lineHeight: 42,
    marginBottom: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  headerTitle: {
    color: '#000000',
    fontSize: 16,
    lineHeight: 24,
    width: 281,
    fontFamily: 'Poppins-Medium',
  },
  image: {
    height: 48,
    width: 48,
    resizeMode: 'contain',
    marginTop: 18,
  },
});
export default SignIn;
