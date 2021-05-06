import React from 'react';
import { Image,ImageBackground,StyleSheet } from 'react-native';
import  bg from '../../assets/images/bg.png';
import  splash_logo from '../../assets/images/splash_logo.png';

const SplashScreen = ()=>{
    return(
        <ImageBackground style={style.container} source={bg}>
            <Image source={splash_logo} style={style.image} />
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    image:{
        height:585,
        width:331
    }
})
export default SplashScreen;