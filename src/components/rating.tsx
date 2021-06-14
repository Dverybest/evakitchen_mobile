import React from 'react';
import {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {black, orange} from '../styles/colors';
import {TextStyle} from '../styles/textStyle';

interface IRating {
  rating: number | undefined;
}

const Rating = ({rating}: IRating) => {
  const fullStar = <FontAwesome name={'star'} size={20} color={orange} />;
  const emptyStar = <FontAwesome name={'star-o'} size={20} color={black} />;
  const halfStar = (
    <FontAwesome name={'star-half-full'} size={20} color={orange} />
  );

  const stars = useMemo(() => {
    let arr = [];
    const limit = 5;
    const difference = limit - (rating ? rating : 0);
    let roundDifference = Math.round(limit - difference + 1);
    for (let index = 1; index <= limit; index++) {
      const notWholeNumber = (rating || 0) - Math.floor(rating || 0) !== 0;
      const indexOfNumber = index === Math.floor(rating || 0) + 1;
      if (notWholeNumber && indexOfNumber) {
        arr.push(halfStar);
      } else if (difference > 0 && index === roundDifference) {
        roundDifference += 1;
        arr.push(emptyStar);
      } else {
        arr.push(fullStar);
      }
    }
    return arr;
  }, [rating]);

  return (
    <View style={{flexDirection: 'row'}}>
      {stars.map((star, index) => (
        <View key={index}>{star}</View>
      ))}
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
