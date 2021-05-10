import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IFood } from '../../../components/interface';
import { black300, white } from '../../../styles/colors';
import { TextStyle } from '../../../styles/textStyle';

interface IFoodListView {
    item:IFood,
    index:number
}

const FoodListView =({item,index}:IFoodListView)=>{
return(
        <TouchableOpacity
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
            source={item.img}
          />
          <View
            style={{
              height: 166,
              borderRadius: 8,
              width: 151,
              paddingHorizontal:10,
              justifyContent:'flex-end',
              backgroundColor: black300,
              position: 'absolute',
              paddingBottom:22
            }}>
                <Text numberOfLines={1} style={[TextStyle.medium,{color:white}]}>{item.title}</Text>
                <Text numberOfLines={2}  style={[TextStyle.regular,{color:white,fontSize:8}]}>{item.description}</Text>
                <View>
                    <Text style={[TextStyle.regular,{color:white,fontSize:12}]}>{`₦${item.price}`}</Text>
                </View>
            </View>
        </TouchableOpacity>
      );
}
export default FoodListView