import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {ButtonPrimary, ButtonWhite} from '../../../components/buttons';
import CardStyle from '../../../styles/cardStyle';
import {black, grey, orange, white} from '../../../styles/colors';
import {TextStyle} from '../../../styles/textStyle';

interface IOrderCard {
  index?: number;
  image: ImageSourcePropType;
  quantity: number;
  title: string;
  orderId?: string;
  arrival?: number;
  status: string;
  amount?: number;
  date?: string;
  secondaryButtonTitle: string;
  primaryButtonTitle: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
}
const OrderCard = ({
  index,
  image,
  quantity,
  title,
  orderId,
  arrival,
  status,
  amount,
  date,
  secondaryButtonTitle,
  primaryButtonTitle,
  secondaryButtonAction,
  primaryButtonAction,
}: IOrderCard) => {
  return (
    <View style={styles.card} key={index} >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image source={image} style={styles.image} />
          <View style={{paddingTop: 8}}>
            <Text
              style={{
                ...TextStyle.regular,
                color: grey,
                fontSize: 12,
                marginBottom: 8,
              }}>
              {`${quantity} items`}
            </Text>
            <Text style={{...TextStyle.medium, fontSize: 18}}>{title}</Text>
          </View>
        </View>
        <View style={{paddingTop: 8}}>
          <Text style={{...TextStyle.regular, color: orange, fontSize: 12}}>
            {orderId ? orderId : amount}
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
            {arrival ? 'Estimated. Arrival' : 'Date'}
          </Text>
          {arrival ? (
            <Text style={{...TextStyle.medium, color: black}}>
              {`${arrival} `}
              <Text style={{...TextStyle.regular, color: black, fontSize: 12}}>
                min
              </Text>
            </Text>
          ) : (
            <Text style={{...TextStyle.regular, color: black, fontSize: 12}}>
              {date}
            </Text>
          )}
        </View>
        <View>
          <Text style={{...TextStyle.regular, color: grey, fontSize: 12}}>
            status
          </Text>
          <Text style={{...TextStyle.regular, color: black, fontSize: 12}}>
            {status}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <ButtonWhite
          text={secondaryButtonTitle}
          containerStyle={{width: 150, height: 42}}
          onPress={secondaryButtonAction}
        />
        <ButtonPrimary
          text={primaryButtonTitle}
          containerStyle={{width: 150, height: 42}}
          onPress={primaryButtonAction}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    ...CardStyle.card,
    backgroundColor: white,
    paddingHorizontal: 21,
    paddingVertical: 16,
    height: 213,
    marginTop: 43,
  },
  image: {
    height: 70,
    width: 118,
    resizeMode: 'contain',
    borderRadius: 10,
  },
});
export default OrderCard;
