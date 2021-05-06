import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import  logo from '../../assets/images/logo.png';
import { white } from '../../styles/colors';

const SignUp = () => {
  return <View style={styles.container}>
      <Image source={logo} style={styles.image}/>
      <Text style={{
          fontFamily:'Poppins-SemiBold',
          fontSize:28,
          lineHeight:42,
      }}>
      Create your account
      </Text>
  </View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:white,
    paddingHorizontal:25,
    paddingTop:18
  },
  image:{
      height:48,
      width:48,
      resizeMode:'contain'
      
  }
});
export default SignUp;
