import React from 'react';
import { StyleSheet, View,Text,Image, TouchableOpacity} from 'react-native';
import { ICategory } from '../../../components/interface';
import {orange300} from '../../../styles/colors'
import { TextStyle } from '../../../styles/textStyle';

const Category = ({name,icon}:ICategory)=>{
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={icon} style={styles.icon}/>
            <Text style={[TextStyle.medium,{fontSize:12}]}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:orange300,
        flexDirection:'row',
        paddingVertical:10,
        marginRight:15,
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