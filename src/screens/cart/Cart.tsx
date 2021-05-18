import {useNavigation} from '@react-navigation/core';
import React, {useContext} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ButtonPrimary, ButtonWhite} from '../../components/buttons';
import Empty from '../../components/empty';
import {Header} from '../../components/header';
import {CartContext} from '../../context/cartContext';
import {ICart} from '../../interfaces/cartContext';
import {white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import CartItemView from './component/CartItemView';

const Cart = () => {
  const {cartState} = useContext(CartContext);
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Header title={'Shopping cart'} />
      {cartState.items.length === 0 ? (
        <View style={{flex: 1}}>
          <Empty
            text={'Empty cart'}
            containerStyle={{flex: 1, justifyContent: 'center'}}
          />
          <ButtonWhite
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
              keyExtractor={(item, index) => `items${index}`}
              renderItem={({item, index}) => (
                <CartItemView
                  key={index}
                  quantity={item.quantity}
                  title={item.title}
                  amount={item.amount}
                />
              )}
            />
          </View>
          <View style={[{margin: 25}]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 50,
              }}>
              <Text style={[TextStyle.medium]}>Total</Text>
              <Text style={[TextStyle.medium]}>{`₦${
                cartState.items.reduce(
                  (amount: number, newAmount: ICart) =>
                    Number(amount) + Number(newAmount.amount),
                  0,
                ) *
                cartState.items.reduce(
                  (quantity: number, newQuantity: ICart) =>
                    Number(quantity) + Number(newQuantity.quantity),
                  0,
                )
              }`}</Text>
            </View>
            <ButtonPrimary containerStyle={{}} text={'Make order'} />
            <ButtonWhite
              containerStyle={{marginTop: 25}}
              text={'Continue shopping'}
              onPress={() => navigate('Home')}
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
});
export default Cart;
