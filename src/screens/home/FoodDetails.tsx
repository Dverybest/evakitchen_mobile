import {RouteProp, useRoute} from '@react-navigation/core';
import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ButtonPrimary} from '../../components/buttons';
import {Header} from '../../components/header';
// import Rating from '../../components/rating';
import {CartContext} from '../../context/cartContext';
import {ActionType} from '../../context/enums';
import {IFood} from '../../interfaces/menu';
import {black, orange, orange300, white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';

const FoodDetails = () => {
  const {
    params: {food},
  }: RouteProp<{params: {food: IFood}}, 'params'> = useRoute();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const {dispatchCartState} = useContext(CartContext);

  const addToCart = () => {
    const {name, rating, price: amount, description} = food;
    const payload = {
      quantity,
      name,
      favourite: isFavorite,
      rating,
      amount,
      description,
    };
    dispatchCartState({
      type: ActionType.ADD_TO_CART,
      payload,
    });
  };
  return (
    <View style={styles.container}>
      <Header title={food.name ?? ''} />
      <ScrollView>
        <View>
          <View
            style={{
              height: 255,
              overflow: 'hidden',
              flexDirection: 'row',
              marginBottom: 54,
            }}>
            <Image source={{uri: food.image}} style={styles.image} />
          </View>
          <Text style={styles.description}>{food.description}</Text>
          <View
            style={{
              flexDirection: 'row',
              margin: 25,
              justifyContent: 'space-between',
            }}>
            <AntDesign
              name={isFavorite ? 'heart' : 'hearto'}
              onPress={() => setIsFavorite(prev => !prev)}
              size={20}
              color={isFavorite ? orange : black}
            />
            {/* <Rating rating={food.rating} /> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              margin: 25,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign
                name={'minus'}
                size={25}
                onPress={() =>
                  setQuantity(prev => (prev > 1 ? prev - 1 : prev))
                }
                color={black}
                style={{
                  backgroundColor: orange300,
                  padding: 7,
                  borderRadius: 8,
                }}
              />
              <Text style={[TextStyle.medium, {marginHorizontal: 25}]}>
                {quantity}
              </Text>
              <AntDesign
                name={'plus'}
                size={25}
                color={black}
                onPress={() => setQuantity(prev => prev + 1)}
                style={{
                  backgroundColor: orange300,
                  padding: 7,
                  borderRadius: 8,
                }}
              />
            </View>
            <Text
              style={[
                TextStyle.medium,
                {marginHorizontal: 25},
              ]}>{`₦${food.price}`}</Text>
          </View>
          <ButtonPrimary
            text="Add to cart"
            containerStyle={{margin: 25}}
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
export default FoodDetails;
