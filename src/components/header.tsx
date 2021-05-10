import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, Text, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { TextStyle } from '../styles/textStyle';
import { black } from '../styles/colors';

interface IHeader{
title:string;
showGoBack:boolean;
containerStyle:ViewStyle;
customGoBackhandler:()=>void
}

export const Header = ({
  title,
  showGoBack =true,
  containerStyle,
  customGoBackhandler,
}:IHeader) => {
  const {goBack, canGoBack, navigate} = useNavigation();
  return (
    <View style={styles.containerStyle}>
      <View style={styles.backBtn}>
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
            <AntDesign color={black} size={15} name="left" />
          </TouchableOpacity>
        )}
      </View>
        <View style={styles.title}>
          <Text
            style={[
              TextStyle.medium,
              {textAlign: 'center', fontSize: 18, lineHeight: 26},
            ]}>
            {title}
          </Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    paddingVertical: 25,
    width: '100%',
  },
  backBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    justifyContent: 'flex-start',
  },
  title: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
