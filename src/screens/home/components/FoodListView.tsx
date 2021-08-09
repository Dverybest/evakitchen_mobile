import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { black300, white } from '../../../styles/colors';
import { TextStyle } from '../../../styles/textStyle';
import { IFoodListView } from '../../../interfaces/menu';
import numberFormatter from '../../../utils/numberFormatter';
import { discounter } from '../../../utils/discounter';
import { heightConverter, normalize, widthConverter } from '../../../utils/pxToDpConvert';

const FoodListView = ({ item, index}: IFoodListView) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate('FoodDetails', { food: item })}
      style={{
        marginRight: widthConverter(13),
        height: heightConverter(166),
        borderRadius: 8,
        width: widthConverter(151),
      }}
      key={index}>
      <Image
        style={{
          height: heightConverter(166),
          width: widthConverter(151),
          resizeMode: 'cover',
          borderRadius: 8,
        }}
        source={{ uri: item.image }}
      />
      <View
        style={{
          height: heightConverter(166),
          borderRadius: 8,
          width: widthConverter(151),
          paddingHorizontal: widthConverter(10),
          justifyContent: 'flex-end',
          backgroundColor: black300,
          position: 'absolute',
          paddingBottom: heightConverter(22),
        }}>
        <Text numberOfLines={1} style={[TextStyle.medium, { color: white, }]}>
          {item.name}
        </Text>
        <Text
          numberOfLines={2}
          style={[TextStyle.regular, { color: white, fontSize: normalize(10) ,marginBottom:heightConverter(10)}]}>
          {item.description}
        </Text>
        <View style={{ flexDirection: 'row' }}>

          {item.discount ? (
            <Text
              style={[
                TextStyle.medium,
                { textDecorationLine: 'line-through', marginHorizontal: widthConverter(5), color: white, fontSize: normalize(12) },
              ]}>{`₦${numberFormatter(Number(item.price))}`}</Text>
          ) : null}

          <Text
            style={[
              TextStyle.regular,
              { color: white, fontSize: normalize(15) },
            ]}>{`₦${numberFormatter(discounter(item.price,item.discount))}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default FoodListView;
