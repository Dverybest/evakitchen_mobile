import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {TextStyle} from '../../../styles/textStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {black} from '../../../styles/colors';

interface IAccountOption {
  icon?: React.ReactElement;
  title: string;
  onPress: () => void;
}

export const AccountOption = ({icon, title, onPress}: IAccountOption) => {
  return (
    <TouchableOpacity
      style={{
        height: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <Text style={{...TextStyle.regular}}>{title}</Text>
      {icon ? icon : <AntDesign name="arrowright" color={black} size={18} />}
    </TouchableOpacity>
  );
};
