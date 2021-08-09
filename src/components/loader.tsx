import React, { useContext } from 'react';
import {Modal, View,StyleSheet} from 'react-native';
import Spinner from 'react-native-spinkit';
import { AppContext } from '../context/appContext';
import { black500 } from '../styles/colors';
import { heightConverter } from '../utils/pxToDpConvert';

const Loader = ()=>{
    const {appState:{isLoading}} = useContext(AppContext)
    return(
        <Modal transparent={true} visible={isLoading}>
            <View style={styles.container}>
                <Spinner type={'Wave'} size={heightConverter(70)} color="#fff" />
            </View>
        </Modal>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:black500
    }
})
export default Loader;
