import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {black, orange} from '../styles/colors';
import {TextStyle} from '../styles/textStyle';

interface IRating {
  rating: number;
}
const Rating = ({rating}: IRating) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <FontAwesome name={'star'} size={20} color={orange} />
      <FontAwesome name={'star'} size={20} color={orange} />
      <FontAwesome name={'star'} size={20} color={orange} />
      <FontAwesome name={'star-half-full'} size={20} color={orange} />
      <FontAwesome name={'star-o'} size={20} color={black} />
      <Text style={styles.rating}>{rating}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  rating: {
    ...TextStyle.regular,
    marginLeft: 9,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});
export default Rating;
