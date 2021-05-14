import React from 'react';
import { View,Text } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import {black, orange, orange300, white} from '../../../styles/colors';
import { TextStyle } from "../../../styles/textStyle";

interface ICartItemView {

}

const CartItemView =()=>{
    return(
        <View
              style={{
                backgroundColor: orange300,
                padding: 17,
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent:'space-between',
                alignItems:'center',
                marginBottom:15
              }}>
              <Text>{`${'1'} X`}</Text>
              <View style={{flex:1,marginLeft:30}}>
                <Text style={[TextStyle.regular]}>{`${'Egusi Soup'}`}</Text>
                <Text style={[TextStyle.regular]}>{`${'₦1,500'}`}</Text>
              </View>
              <AntDesign style={{backgroundColor:white,borderRadius:15,padding:5}} name={'close'} size={25} color={black} />
            </View>
    )
}
export default CartItemView;