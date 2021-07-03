import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CartContext} from '../../../context/cartContext';
import {ActionType} from '../../../context/enums';
import {black, orange300, white} from '../../../styles/colors';
import {TextStyle} from '../../../styles/textStyle';

interface ICartItemView {
  index: number;
  quantity: number;
  name: string;
  amount: number;
}

const CartItemView = ({quantity, name, amount, index}: ICartItemView) => {
  const {dispatchCartState} = useContext(CartContext);
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
      }}>
      <Text>{`${quantity} X`}</Text>
      <View style={{flex: 1, marginLeft: 30}}>
        <Text style={[TextStyle.regular]}>{`${name}`}</Text>
        <Text style={[TextStyle.regular]}>{`₦${amount}`}</Text>
        {/* <Text style={[TextStyle.regular]}>{`-₦${discount}`}</Text> */}
      </View>
      <AntDesign
        style={{backgroundColor: white, borderRadius: 15, padding: 5}}
        name={'close'}
        size={25}
        color={black}
        onPress={() =>
          dispatchCartState({type: ActionType.REMOVE_FROM_CART, payload: index})
        }
      />
    </View>
  );
};
export default CartItemView;
