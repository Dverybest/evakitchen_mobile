import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {black300, white} from '../../../styles/colors';
import {TextStyle} from '../../../styles/textStyle';
import {IFoodListView} from '../../../interfaces/menu';
import numberFormatter from '../../../utils/numberFormatter';

const FoodListView = ({item, index}: IFoodListView) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate('FoodDetails', {food: item})}
      style={{
        marginRight: 13,
        height: 166,
        borderRadius: 8,
        width: 151,
      }}
      key={index}>
      <Image
        style={{
          height: 166,
          width: 151,
          resizeMode: 'cover',
          borderRadius: 8,
        }}
        source={{uri: item.image}}
      />
      <View
        style={{
          height: 166,
          borderRadius: 8,
          width: 151,
          paddingHorizontal: 10,
          justifyContent: 'flex-end',
          backgroundColor: black300,
          position: 'absolute',
          paddingBottom: 22,
        }}>
        <Text numberOfLines={1} style={[TextStyle.medium, {color: white}]}>
          {item.name}
        </Text>
        <Text
          numberOfLines={2}
          style={[TextStyle.regular, {color: white, fontSize: 8}]}>
          {item.description}
        </Text>
        <View>
          <Text
            style={[
              TextStyle.regular,
              {color: white, fontSize: 12},
            ]}>{`₦${numberFormatter(Number(item.price))}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default FoodListView;
