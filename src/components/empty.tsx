import React from 'react';
import {Image, StyleSheet, Text, View, ViewStyle} from 'react-native';
import empty from '../assets/images/empty.png';
import { TextStyle } from '../styles/textStyle';

interface IEmptyView{
  containerStyle?:ViewStyle,
  text?:string
}

const Empty = ({containerStyle,text}:IEmptyView) => {
  return (
    <View style={[containerStyle,{alignItems:'center'}]}>
      <Image
        source={empty}
        style={{height: 247, width: 241, resizeMode: 'contain'}}
      />
      <Text style={[TextStyle.regular,{marginTop:40}]}>{text}</Text>
    </View>
  );
};
const style = StyleSheet.create({
});
export default Empty;
