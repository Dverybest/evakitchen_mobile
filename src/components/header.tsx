import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, Text, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { TextStyle } from '../styles/textStyle';
import { black, white } from '../styles/colors';
import { heightConverter, widthConverter } from '../utils/pxToDpConvert';

interface IHeader{
title?:string;
showGoBack?:boolean;
containerStyle?:ViewStyle;
customGoBackhandler?:()=>void
}

export const Header = ({
  title,
  showGoBack =true,
  customGoBackhandler,
}:IHeader) => {
  const {goBack, canGoBack, navigate} = useNavigation();
  return (
    <View style={styles.containerStyle}>
      <View style={[styles.backBtn]}>
        {showGoBack && (
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() =>
              customGoBackhandler
                ? customGoBackhandler()
                : canGoBack()
                ? goBack()
                : navigate('Home')
            }>
            <AntDesign color={black} size={heightConverter(18)} name="left" />
          </TouchableOpacity>
        )}
      </View>
        <View style={styles.title}>
          <Text
            style={[
              TextStyle.semiBold,
              
            ]}>
            {title}
          </Text>
        </View>
        <View style={[{flex:1}]}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    paddingVertical: heightConverter(15),
    width: '100%',
    backgroundColor:white
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: widthConverter(5),
    justifyContent: 'flex-start',
  },
  title: {
    flex: 5,
    marginLeft:widthConverter(25)
  },
  cancle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
