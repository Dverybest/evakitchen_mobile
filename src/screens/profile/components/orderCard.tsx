import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {IOrder} from '../../../interfaces/order';
import CardStyle from '../../../styles/cardStyle';
import {black, grey, orange, white} from '../../../styles/colors';
import {TextStyle} from '../../../styles/textStyle';
import { heightConverter, normalize, widthConverter } from '../../../utils/pxToDpConvert';

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
            source={{uri: order?.orderItems[0]?.menu?.image}}
            style={styles.image}
          />
          <View style={{paddingTop: heightConverter(8)}}>
            <Text
              style={{
                ...TextStyle.regular,
                color: grey,
                fontSize: normalize(12),
                marginBottom: heightConverter(8),
              }}>
                {`#${order.orderId}`}
             
            </Text>
            <Text style={{...TextStyle.medium, fontSize: normalize(18)}}>
            {`${order.orderItems.length} item${order.orderItems.length!==1?'s':''}`}
            </Text>
          </View>
        </View>
        <View style={{paddingTop: heightConverter(8)}}>
            <Text style={{...TextStyle.regular, color: orange, fontSize: normalize(15)}}>
            {`${'\u20A6'}${order.total}`}
            </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: heightConverter(15),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{...TextStyle.regular, color: grey, fontSize: normalize(12)}}>
            {'Date'}
          </Text>
          <Text style={{...TextStyle.regular, color: black, fontSize: normalize(12)}}>
            {new Date(order.createdAt).toDateString()}
          </Text>
        </View>
        <View>
          <Text style={{...TextStyle.regular, color: grey, fontSize: normalize(12)}}>
            status
          </Text>
          <Text style={{...TextStyle.regular, color: black, fontSize: normalize(12)}}>
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
    paddingHorizontal: widthConverter(21),
    paddingVertical: heightConverter(16),
    marginBottom: heightConverter(30),
  },
  image: {
    height: heightConverter(70),
    width: widthConverter(118),
    resizeMode: 'cover',
    marginRight: widthConverter(5),
    borderRadius: 10,
  },
});
export default OrderCard;
