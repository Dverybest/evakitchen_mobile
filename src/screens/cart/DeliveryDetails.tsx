import React, {useContext, useRef, useMemo, useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components/header';
import {TextField} from '../../components/textfield';
import {AuthContext} from '../../context/authContext';
import {white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import {v4 as uuidv4} from 'uuid';
import 'react-native-get-random-values';
import {ButtonFlutterWave} from '../../components/buttons';
import LocationSearch from './component/locationSearch';
import {ICart} from '../../interfaces/cartContext';
import {CartContext} from '../../context/cartContext';
import {useRequestProcessor} from '../../api/requestProcessor';
import Error from '../../components/error';
import Success from '../../components/success';
import { ActionType } from '../../context/enums';
import { useNavigation } from '@react-navigation/native';

const DeliveryDetails = () => {
  const {authState} = useContext(AuthContext);
  const {cartState,dispatchCartState} = useContext(CartContext);
  const {makeRequest} = useRequestProcessor();
  const [showSuccess, setShowSuccess] = useState({show: false, message: ''});
  const [showError, setShowError] = useState({show: false, message: ''});
  const {reset} = useNavigation();
  const [details, setDetails] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
    deliveryType: 'instant Delivery',
    shippingFee: 500,
  });
  const handleChange = (name: string, value: string) => {
    if (name === 'address' && value != '') {
      return setDetails(prev => ({...prev, [name]: value, shippingFee: 500}));
    }
    setDetails(prev => ({...prev, [name]: value}));
  };
  const transactionReference = useRef(uuidv4());

  const subTotal = useMemo(
    () =>
      cartState.items.reduce(
        (amount: any, items: ICart) =>
         [ Number(amount[0]) + Number(items.amount) * Number(items.quantity),Number(amount[1]) + Number(items.discount)],
        [0,0],
      ),
    [cartState.items],
  );
  const orderItems = useMemo(
    () =>
      cartState.items.reduce(
        (arr: any, item: ICart) => [
          ...arr,
          {menu: item._id, quantity: item.quantity},
        ],
        [],
      ),
    [cartState.items],
  );
  const handleRedirect = async (data: any) => {
    console.log({data},{...details, transactionId: data.transaction_id, orderItems});
    const {response, error} = await makeRequest({
      method: 'post',
      url: `/makeorder`,
      payload: {...details,discount:subTotal[1], transactionId: data.transaction_id, orderItems},
    });
    if (error) {
      setShowError({show: false, message: error.message})
    } else if (response) {
      dispatchCartState({type:ActionType.CLEAR_CART,payload:null})
      setShowSuccess({show: true, message: response.message});
    }
  };
  const cleanUp =()=>{
    setShowSuccess({show: false, message: ''});
    reset({index: 0, routes: [{name: 'My Orders'}]});
  }
  return (
    <View style={styles.container}>
      <Header title={'Delivery detail'} />
      <Text style={{...TextStyle.regular, fontSize: 16, marginHorizontal: 25}}>
        Please enter delivery details to proceed to payment
      </Text>
      <ScrollView style={{flex: 1, marginHorizontal: 25}}>
      <Error text={''} visible={showError.show} setVisibility={()=>setShowError({show: false, message: ''})}/>
      <Success
            visible={showSuccess.show}
            onPress={cleanUp}
            text={showSuccess.message}
          />
        <View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <TextField
              keyboardType="default"
              onChangeText={text => handleChange('fullName', text)}
              placeholder="Name"
              value={details.fullName}
              mainContainerStyle={{flex: 1}}
            />
            <View style={{width: 10}}></View>
            <TextField
              onChangeText={text => handleChange('phoneNumber', text)}
              keyboardType="number-pad"
              value={details.phoneNumber}
              mainContainerStyle={{flex: 1}}
              placeholder="Phone Number"
            />
          </View>
          <LocationSearch
            handleChange={value => handleChange('address', value)}
            placeholder="Delivery location"
            containerStyle={{}}
          />
        </View>
        <View style={{justifyContent: 'flex-end', flex: 1, marginTop: 50}}>
          <View style={styles.priceDetails}>
            <Text style={[TextStyle.medium]}>Sub Total</Text>
            <Text style={[TextStyle.medium]}>{`₦${subTotal}`}</Text>
          </View>
          <View style={styles.priceDetails}>
            <Text style={[TextStyle.medium]}>Delivery fee</Text>
            <Text style={[TextStyle.medium]}>{`₦${details.shippingFee}`}</Text>
          </View>
          <View style={styles.priceDetails}>
            <Text style={[TextStyle.medium]}>Total</Text>
            <Text style={[TextStyle.medium]}>{`₦${
              subTotal[0] + details.shippingFee
            }`}</Text>
          </View>
          <ButtonFlutterWave
            disabled={
              !(
                details.fullName &&
                details.phoneNumber.length > 10 &&
                details.address
              )
            }
            transactionReference={transactionReference.current ?? ''}
            email={authState.user?.email ?? ''}
            handleRedirect={handleRedirect}
            amount={subTotal[0] + details.shippingFee}
            containerStyle={{
              marginVertical: 20,
            }}
            text="Continue to make payment"
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  priceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});
export default DeliveryDetails;
