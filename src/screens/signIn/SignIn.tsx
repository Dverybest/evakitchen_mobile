import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {white, orange, black} from '../../styles/colors';
import {Button} from '../../components/buttons';
import {TextField} from '../../components/textfield';
import logo from '../../assets/images/logo.png';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.image} />
        <Text style={styles.header}>Welcome back</Text>
        <Text style={styles.headerTitle}>
          Please log in to continue from where you stopped
        </Text>
        <TextField placeholder="Email" marginTop={51} />
        <TextField placeholder="Password" password marginTop={31} />
        <Text
          style={{
            color: orange,
            marginLeft: 20,
            marginTop: 18,
            fontFamily: 'Poppins-Regular',
          }}>
          Forgot password?
        </Text>
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
          marginBottom={101}
        />
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 16}}>
            Don’t have an account?<Text style={{color: orange}}> Sign up</Text>
          </Text>
        </View>
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
    // fontWeight: 'bold',
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
