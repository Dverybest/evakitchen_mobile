import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { black100, white } from '../styles/colors';
import { TextStyle } from '../styles/textStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { IFood } from '../interfaces/menu';
import numberFormatter from '../utils/numberFormatter';
import { discounter } from '../utils/discounter';

interface IFoodCard extends IFood {
  favourite?: boolean;
  setFavourite?: (value: React.SetStateAction<boolean>) => void;
}

const FoodCard = ({
  image,
  rating,
  favourite,
  name,
  price,
  description,
  discount,
}: IFoodCard) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigate('FoodDetails', {
          food: {
            image,
            rating,
            favourite,
            description,
            name,
            price,
            discount
          },
        })
      }>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: image }} />
        <View
          style={{
            position: 'absolute',
            backgroundColor: black100,
            right: 0,
            left: 0,
            padding: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 63,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome name="star" size={12} color={white} />
              <Text
                style={{
                  ...TextStyle.medium,
                  color: white,
                  fontSize: 15,
                  marginLeft: 5,
                }}>
                {rating}
              </Text>
            </View>
            {/* <AntDesign
              name={favourite ? 'heart' : 'hearto'}
              onPress={() => setFavourite(prev => !prev)}
              size={20}
              color={favourite ? orange : white}
            /> */}
          </View>
          <View style={{ alignItems: 'flex-start' }}>
            <View
              style={{
                padding: 15,
                marginBottom: 20,
                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  ...TextStyle.semiBold,
                  color: white,
                  fontSize: 16,
                  lineHeight: 24,
                }}>
                {name}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                {
                  discount ? (
                    <Text
                      style={{
                        ...TextStyle.regular,
                        color: white,
                        lineHeight: 26,
                        fontSize: 14,
                        textDecorationLine: 'line-through',
                        marginRight: 8,
                      }}>
                      {`₦${numberFormatter(Number(price))}`}
                    </Text>
                  ) : null
                }
                <Text
                  style={{
                    ...TextStyle.regular,
                    color: white,
                    lineHeight: 26,
                    fontSize: 16,
                  }}>
                  {`₦${numberFormatter(discounter(price, discount))}`}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 204,
    overflow: 'hidden',
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    height: 204,
  },
});
export default FoodCard;
