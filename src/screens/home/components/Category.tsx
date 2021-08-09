import React from 'react';
import { StyleSheet,Text, TouchableOpacity} from 'react-native';
import { ICategoryListView } from '../../../interfaces/menu';
import {orange300} from '../../../styles/colors'
import { TextStyle } from '../../../styles/textStyle';
import { heightConverter, normalize, widthConverter } from '../../../utils/pxToDpConvert';

const Category = ({name, onPress}:ICategoryListView)=>{
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {/* <Image source={icon} style={styles.icon}/> */}
            <Text style={[TextStyle.medium,{fontSize:normalize(12)}]}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:orange300,
        flexDirection:'row',
        paddingVertical:heightConverter(7),
        marginRight:heightConverter(15),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:heightConverter(8)>widthConverter(8)?widthConverter(8):heightConverter(8),
        paddingHorizontal:widthConverter(13)
    },
    icon:{
        marginRight:widthConverter(9),
        height:heightConverter(25),
        width:widthConverter(25),
        resizeMode:'contain'
    }
})

export default Category;