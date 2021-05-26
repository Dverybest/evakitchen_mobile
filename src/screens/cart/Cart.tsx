import {useNavigation} from '@react-navigation/core';
import React, {useContext, useMemo} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ButtonPrimary, ButtonWhite} from '../../components/buttons';
import Empty from '../../components/empty';
import {Header} from '../../components/header';
import {CartContext} from '../../context/cartContext';
import {ICart} from '../../interfaces/cartContext';
import {orange, white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import CartItemView from './component/CartItemView';

const Cart = () => {
  const {cartState} = useContext(CartContext);
  const {navigate} = useNavigation();
  const deliveryFee = 100;
  const totalAmount = useMemo(
    () =>
      cartState.items.reduce(
        (amount: number, items: ICart) =>
          Number(amount) + Number(items.amount) * Number(items.quantity),
        0,
      ),
    [cartState.items],
  );
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
              keyExtractor={(_, index) => `items${index}`}
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
          <View style={[{margin: 25, marginTop: 65}]}>
            <View style={styles.priceDetails}>
              <Text style={[TextStyle.medium]}>Sub Total</Text>
              <Text style={[TextStyle.medium]}>{`₦${totalAmount}`}</Text>
            </View>
            <View style={styles.priceDetails}>
              <Text style={[TextStyle.medium]}>Delivery fee</Text>
              <Text style={[TextStyle.medium]}>{`₦${deliveryFee}`}</Text>
            </View>
            <View style={styles.priceDetails}>
              <Text style={[TextStyle.medium]}>Total</Text>
              <Text style={[TextStyle.medium]}>{`₦${
                totalAmount + deliveryFee
              }`}</Text>
            </View>
            {/* <PayWithFlutterwave
              onRedirect={() => console.log(898)}
              options={{
                tx_ref: '1223',
                authorization:
                  'FLWPUBK_TEST-7753e6df013e9285a4d93a10b751b747-X',
                customer: {
                  email: 'customer-email@example.com',
                },
                amount: totalAmount,
                currency: 'NGN',
                payment_options: 'card',
              }}
              customButton={props => (
                <TouchableOpacity
                  style={styles.paymentButton}
                  onPress={props.onPress}
                  disabled={props.disabled}>
                  <Text style={styles.text}>Make order</Text>
                </TouchableOpacity>
              )}
            /> */}
            <ButtonPrimary
              containerStyle={{}}
              text={'Make order'}
              onPress={() => navigate('DeliveryDetails')}
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
    color: white,
    ...TextStyle.regular,
    fontSize: 14,
  },
  priceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});
export default Cart;
