import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {black300, orange, white} from '../styles/colors';
import {TextStyle} from '../styles/textStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import img2 from '../assets/images/img2.jpg';

const FoodCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={img2} />
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
              4.6
            </Text>
          </View>
          <AntDesign
            name={isFavorite ? 'heart' : 'hearto'}
            onPress={() => setIsFavorite(prev => !prev)}
            size={20}
            color={isFavorite ? orange : white}
          />
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
              Egusi Soup with assorted meat
            </Text>
            <Text
              style={{
                ...TextStyle.regular,
                color: white,
                lineHeight: 40,
              }}>
              ₦1,500
            </Text>
          </View>
        </View>
      </View>
    </View>
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
