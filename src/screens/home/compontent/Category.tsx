import React from 'react';
import { StyleSheet, View,Text,Image, TouchableOpacity} from 'react-native';
import { ICategory } from '../../../components/interface';
import {orange300} from '../../../styles/colors'
import { TextStyle } from '../../../styles/textStyle';

const Category = ({name,icon}:ICategory)=>{
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={icon} style={styles.icon}/>
            <Text style={[TextStyle.medium,{}]}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:orange300,
        flexDirection:'row',
        height:50,
        marginRight:15,
        alignItems:'center',
        borderRadius:8,
        paddingHorizontal:15
    },
    icon:{
        marginRight:9,
        height:25,
        width:25,
        resizeMode:'contain'
    }
})

export default Category;