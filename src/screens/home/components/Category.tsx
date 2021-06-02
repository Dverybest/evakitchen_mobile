import React from 'react';
import { StyleSheet,Text,Image, TouchableOpacity} from 'react-native';
import { ICategoryListView } from '../../../interfaces/menu';
import {orange300} from '../../../styles/colors'
import { TextStyle } from '../../../styles/textStyle';

const Category = ({name,image, onPress}:ICategoryListView)=>{
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {/* <Image source={icon} style={styles.icon}/> */}
            <Text style={[TextStyle.medium,{fontSize:12}]}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:orange300,
        flexDirection:'row',
        paddingVertical:7,
        marginRight:15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        paddingHorizontal:13
    },
    icon:{
        marginRight:9,
        height:25,
        width:25,
        resizeMode:'contain'
    }
})

export default Category;