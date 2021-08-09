import React from 'react';
import {Image, Text, View, ViewStyle} from 'react-native';
import empty from '../assets/images/empty.png';
import {TextStyle} from '../styles/textStyle';
import { heightConverter, widthConverter } from '../utils/pxToDpConvert';

interface IEmptyView {
  containerStyle?: ViewStyle;
  text?: string;
}

const Empty = ({containerStyle, text}: IEmptyView) => {
  return (
    <View style={[containerStyle, {alignItems: 'center'}]}>
      <Image
        source={empty}
        style={{height: heightConverter(247), width: widthConverter(241), resizeMode: 'contain'}}
      />
      <Text style={[TextStyle.regular, {marginTop: heightConverter(40)}]}>{text}</Text>
    </View>
  );
};
export default Empty;
