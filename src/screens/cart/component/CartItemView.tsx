import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ICart } from '../../../interfaces/cartContext';
import {black, orange300, white} from '../../../styles/colors';
import {TextStyle} from '../../../styles/textStyle';

interface ICartItemView extends ICart {
  key: number;
}

const CartItemView = ({key, quantity, title, amount}: ICartItemView) => {
  return (
    <View
      style={{
        backgroundColor: orange300,
        padding: 17,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
      }}
      key={key}>
      <Text>{`${quantity} X`}</Text>
      <View style={{flex: 1, marginLeft: 30}}>
        <Text style={[TextStyle.regular]}>{`${title}`}</Text>
        <Text style={[TextStyle.regular]}>{`₦${amount}`}</Text>
      </View>
      <AntDesign
        style={{backgroundColor: white, borderRadius: 15, padding: 5}}
        name={'close'}
        size={25}
        color={black}
      />
    </View>
  );
};
export default CartItemView;
