import {useNavigation} from '@react-navigation/core';
import React, {useContext} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ButtonPrimary} from '../../components/buttons';
import Empty from '../../components/empty';
import {CartContext} from '../../context/cartContext';
import {orange, white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import CartItemView from './component/CartItemView';

const Cart = () => {
  const {cartState} = useContext(CartContext);
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
       <Text style={{...TextStyle.semiBold,marginLeft:25, marginVertical: 20}}>Cart</Text>
      {cartState.items.length === 0 ? (
        <View style={{flex: 1}}>
          <Empty
            text={'Empty cart'}
            containerStyle={{flex: 1, justifyContent: 'center'}}
          />
          <ButtonPrimary
            containerStyle={{margin: 25}}
            text={'Continue shopping'}
            onPress={() => navigate('Home')}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={[styles.container, {marginHorizontal: 25}]}>
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
    marginHorizontal: 24,
    resizeMode: 'contain',
    height: 255,
  },
  description: {
    marginHorizontal: 35,
    textAlign: 'left',
    ...TextStyle.regular,
  },
  rating: {
    ...TextStyle.regular,
    marginLeft: 9,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  paymentButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    backgroundColor: orange,
  },
  text: {
    ...TextStyle.regular,
    color: white,
    fontSize: 14,
  },
  priceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});
export default Cart;
