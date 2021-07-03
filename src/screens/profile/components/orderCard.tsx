import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {IOrder} from '../../../interfaces/order';
import CardStyle from '../../../styles/cardStyle';
import {black, grey, orange, white} from '../../../styles/colors';
import {TextStyle} from '../../../styles/textStyle';

interface IOrderCard {
  index?: number;
  order: IOrder;
  // secondaryButtonTitle: string;
  // primaryButtonTitle: string;
  // primaryButtonAction?: () => void;
  // secondaryButtonAction?: () => void;
}
const OrderCard = ({index, order}: IOrderCard) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      key={index}
      onPress={() => navigation.navigate('OrderDetails', {order})}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: order.orderItems[0].menu.image}}
            style={styles.image}
          />
          <View style={{paddingTop: 8}}>
            <Text
              style={{
                ...TextStyle.regular,
                color: grey,
                fontSize: 12,
                marginBottom: 8,
              }}>
                {`#${order.orderId}`}
             
            </Text>
            <Text style={{...TextStyle.medium, fontSize: 18}}>
            {`${order.orderItems.length} item${order.orderItems.length!==1?'s':''}`}
            </Text>
          </View>
        </View>
        <View style={{paddingTop: 8}}>
            <Text style={{...TextStyle.regular, color: orange, fontSize: 15}}>
            {`${'\u20A6'}${order.total}`}
            </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{...TextStyle.regular, color: grey, fontSize: 12}}>
            {'Date'}
          </Text>
          <Text style={{...TextStyle.regular, color: black, fontSize: 12}}>
            {new Date(order.createdAt).toDateString()}
          </Text>
        </View>
        <View>
          <Text style={{...TextStyle.regular, color: grey, fontSize: 12}}>
            status
          </Text>
          <Text style={{...TextStyle.regular, color: black, fontSize: 12}}>
            {order.status}
          </Text>
        </View>
      </View>
    
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    ...CardStyle.card,
    backgroundColor: white,
    paddingHorizontal: 21,
    paddingVertical: 16,
    marginBottom: 30,
  },
  image: {
    height: 70,
    width: 118,
    resizeMode: 'cover',
    marginRight: 5,
    borderRadius: 10,
  },
});
export default OrderCard;
