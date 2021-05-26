import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {black300, orange, white} from '../styles/colors';
import {TextStyle} from '../styles/textStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import {IFood} from '../interfaces/menu';

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
  setFavourite,
}: IFoodCard) => {
  const {navigate} = useNavigation();
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
          },
        })
      }>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: image}} />
        <View
          style={{
            position: 'absolute',
            backgroundColor: black300,
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
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome name="star" size={10} color={white} />
              <Text
                style={{
                  ...TextStyle.regular,
                  color: white,
                  fontSize: 12,
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
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                padding: 15,
                marginBottom: 20,
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  ...TextStyle.medium,
                  color: white,
                  lineHeight: 24,
                }}>
                {name}
              </Text>
              <Text
                style={{
                  ...TextStyle.regular,
                  color: white,
                  lineHeight: 40,
                }}>
                {`₦${price}`}
              </Text>
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
    marginBottom: 54,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    height: 204,
  },
});
export default FoodCard;
