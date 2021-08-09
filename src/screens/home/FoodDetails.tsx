import {RouteProp, useRoute} from '@react-navigation/core';
import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ButtonPrimary} from '../../components/buttons';
import {Header} from '../../components/header';
import Rating from '../../components/rating';
import {CartContext} from '../../context/cartContext';
import {ActionType} from '../../context/enums';
import {IFood} from '../../interfaces/menu';
import {black, orange300, red, white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import { discounter } from '../../utils/discounter';
import numberFormatter from '../../utils/numberFormatter';
import { heightConverter, normalize, widthConverter } from '../../utils/pxToDpConvert';

const FoodDetails = () => {
  const {
    params: {food},
  }: RouteProp<{params: {food: IFood}}, 'params'> = useRoute();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const {dispatchCartState} = useContext(CartContext);

  const addToCart = () => {
    const {name, rating, price: amount, description, _id, discount} = food;
    const cost = discounter(amount, discount);
    const payload = {
      quantity,
      _id,
      name,
      favourite: isFavorite,
      rating,
      discount,
      amount: cost,
      description,
    };
    dispatchCartState({
      type: ActionType.ADD_TO_CART,
      payload,
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View>
          
            <Image source={{uri: food.image}} style={styles.image} />
        
          <View
            style={{
              marginBottom: heightConverter(15),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Rating rating={food.rating} />
          </View>
          <Text
            numberOfLines={1}
            style={[styles.description, TextStyle.semiBold]}>
            {food.name?.trim()}
          </Text>
          <Text style={styles.description}>{food.description?.trim()}</Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: widthConverter(20),
              marginVertical: heightConverter(20),
              justifyContent: 'space-between',
            }}>
            {/* <AntDesign
              name={isFavorite ? 'heart' : 'hearto'}
              onPress={() => setIsFavorite(prev => !prev)}
              size={25}
              color={isFavorite ? red : black}
            /> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: widthConverter(25),
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
              <AntDesign
                name={'minus'}
                size={heightConverter(25)}
                onPress={() =>
                  setQuantity(prev => (prev > 1 ? prev - 1 : prev))
                }
                color={black}
                style={{
                  backgroundColor: orange300,
                  paddingHorizontal:widthConverter(8),
                  paddingVertical:heightConverter(8),
                  borderRadius: 8,
                }}
              />
              <Text style={[TextStyle.medium, {marginHorizontal: widthConverter(25)}]}>
                {quantity}
              </Text>
              <AntDesign
                name={'plus'}
                size={heightConverter(25)}
                color={black}
                onPress={() => setQuantity(prev => prev + 1)}
                style={{
                  backgroundColor: orange300,
                  padding: 7,
                  borderRadius: 8,
                }}
              />
            </View>
            {food.discount ? (
              <Text
                style={[
                  TextStyle.medium,
                  {textDecorationLine: 'line-through', marginHorizontal: widthConverter(5)},
                ]}>{`₦${numberFormatter(Number(food.price))}`}</Text>
            ) : null}
            <Text style={[TextStyle.medium, {fontSize: normalize(22),lineHeight:normalize(40)}]}>{`₦${numberFormatter(discounter(
              food.price,
              food.discount,
            ))}`}</Text>
          </View>
          <ButtonPrimary
            text="Add to cart"
            containerStyle={{marginHorizontal:widthConverter(25),marginVertical:heightConverter(35) }}
            onPress={addToCart}
          />
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
    height: heightConverter(253.9),
    width:widthConverter(330),
    marginBottom: heightConverter(15),
    marginHorizontal: widthConverter(24),
    resizeMode:'contain'
  },
  description: {
    marginHorizontal: widthConverter(35),
    textAlign: 'left',
    ...TextStyle.regular,
  },
  rating: {
    ...TextStyle.regular,
    marginLeft: 9,
    fontSize: normalize(16),
    lineHeight: normalize(24),
    textAlign: 'center',
  },
});
export default FoodDetails;
