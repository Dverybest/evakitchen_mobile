import {useNavigation, useRoute} from '@react-navigation/core';
import {RouteProp} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import {useRequestProcessor} from '../../api/requestProcessor';
import {ButtonPrimary, ButtonWhite} from '../../components/buttons';
import {Header} from '../../components/header';
import {IOrder} from '../../interfaces/order';
import {black, grey, orange, white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';

const OrderDetails = () => {
  const {makeRequest} = useRequestProcessor();
  const {
    params: {order},
  }: RouteProp<{params: {order: IOrder}}, 'params'> = useRoute();
  return (
    <View style={styles.container}>
      <Header title={'Order Details'} />
      <ScrollView>
        <View style={styles.container}>
          <View
            style={[
              {
                marginHorizontal: 25,
                backgroundColor: orange + '09',
                paddingHorizontal: 15,
                paddingVertical: 10,
              },
            ]}>
            <Text
              style={{
                textAlign: 'center',
                ...TextStyle.semiBold,
                fontSize: 18,
              }}>
              Reciept
            </Text>
            <View
              style={{
                borderStyle: 'dashed',
                borderWidth: 0.3,
                borderColor: grey,
              }}></View>

            {
              order.orderItems.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      borderStyle: 'dashed',
                      borderBottomWidth: 0.5,
                      borderBottomColor: grey,
                      paddingVertical: 10,
                    }}>
                    <Text
                      style={{
                        ...TextStyle.medium,
                        fontSize: 17,
                        lineHeight: 25,
                      }}>
                      {item.menu?.name.trim()}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{color: black}}>{`${item.quantity} x ₦${
                        item.menu?.price ?? 0
                      }`}</Text>
                      <Text>{`₦${item.quantity * item.menu?.price ?? 0}`}</Text>
                    </View>
                  </View>
              )})
            }
            <View style={{marginTop: 50}}>
              <View style={styles.priceDetails}>
                <Text style={[TextStyle.medium]}>Order ID</Text>
                <Text style={[TextStyle.medium]}>{`#${order.orderId}`}</Text>
              </View>
              <View style={styles.priceDetails}>
                <Text style={[TextStyle.medium]}>Sub Total</Text>
                <Text style={[TextStyle.medium]}>{`₦${order.subTotal}`}</Text>
              </View>
              <View style={styles.priceDetails}>
                <Text style={[TextStyle.medium]}>Delivery fee</Text>
                <Text
                  style={[TextStyle.medium]}>{`₦${order.shippingFee}`}</Text>
              </View>
              <View style={styles.priceDetails}>
                <Text style={[TextStyle.medium]}>Total</Text>
                <Text style={[TextStyle.medium]}>{`₦${order.total}`}</Text>
              </View>
              <View style={styles.priceDetails}>
                <Text style={[TextStyle.medium]}>Status</Text>
                <Text
                  style={[
                    TextStyle.medium,
                    {textTransform: 'capitalize'},
                  ]}>{`${order.status}`}</Text>
              </View>
            </View>
          </View>
          {/* <View
        style={{
          flex: 1,
          marginTop: 15,
          marginBottom: 15,
          flexDirection: 'row',
          marginHorizontal:20,
          justifyContent: 'space-between',
          height: 42
        }}>
        <ButtonWhite
          text={'Rate'}
          containerStyle={{flex: 1}}
          onPress={()=>{}}
        />
        <View style={{width: 10}}></View>
        <ButtonPrimary
          text={'Re-order'}
          containerStyle={{flex: 1}}
          onPress={()=>{}}
        />
      </View> */}
        </View>
      </ScrollView>
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
export default OrderDetails;
