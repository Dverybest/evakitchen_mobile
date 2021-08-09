import {useNavigation} from '@react-navigation/core';
import React, {useContext} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ButtonPrimary} from '../../components/buttons';
import Empty from '../../components/empty';
import {CartContext} from '../../context/cartContext';
import {orange, white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import { heightConverter, normalize, widthConverter } from '../../utils/pxToDpConvert';
import CartItemView from './component/CartItemView';

const Cart = () => {
  const {cartState} = useContext(CartContext);
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
       <Text style={{...TextStyle.semiBold,marginLeft:widthConverter(25), marginVertical: heightConverter(20)}}>Cart</Text>
      {cartState.items.length === 0 ? (
        <View style={{flex: 1}}>
          <Empty
            text={'Empty cart'}
            containerStyle={{flex: 1, justifyContent: 'center'}}
          />
          <ButtonPrimary
            containerStyle={{marginHorizontal: widthConverter(25),marginVertical:heightConverter(25)}}
            text={'Continue shopping'}
            onPress={() => navigate('Home')}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={[styles.container, {marginHorizontal: widthConverter(25)}]}>
            <FlatList
              data={cartState.items}
              keyExtractor={(_, index) => `items${index}`}
              renderItem={({item, index}) => (
                <CartItemView
                  index={index}
                  quantity={item.quantity}
                  name={item.name}
                  amount={item.amount}
                />
              )}
            />
          </View>
          <View style={[{margin: 25,}]}>
           
            <ButtonPrimary
              containerStyle={{}}
              text={'Make order'}
              onPress={() =>
                navigate('DeliveryDetails')
              }
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  image: {
    flex: 1,
    marginHorizontal: widthConverter(24),
    resizeMode: 'contain',
    height: heightConverter(255),
  },
  description: {
    marginHorizontal: widthConverter(35),
    textAlign: 'left',
    ...TextStyle.regular,
  },
  rating: {
    ...TextStyle.regular,
    marginLeft: widthConverter(9),
    fontSize: normalize(16),
    lineHeight: normalize(24),
    textAlign: 'center',
  },
  paymentButton: {
    height: heightConverter(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    backgroundColor: orange,
  },
  text: {
    ...TextStyle.regular,
    color: white,
    fontSize: normalize(14),
  },
  priceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:heightConverter(15),
  },
});
export default Cart;
