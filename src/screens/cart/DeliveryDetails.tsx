import React, {useContext, useRef,useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components/header';
import {TextField} from '../../components/textfield';
import {AuthContext} from '../../context/authContext';
import {white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import {v4 as uuidv4} from 'uuid';
import 'react-native-get-random-values';
import {ButtonFlutterWave} from '../../components/buttons';
import LocationSearch from './component/locationSearch';
import { ICart } from '../../interfaces/cartContext';
import { CartContext } from '../../context/cartContext';


const DeliveryDetails = () => {
  const {authState} = useContext(AuthContext);
  const {cartState} = useContext(CartContext);
  const transactionReference = useRef(uuidv4());
 
  const deliveryFee = 100;
  const subTotal = useMemo(
    () =>
      cartState.items.reduce(
        (amount: number, items: ICart) =>
          Number(amount) + Number(items.amount) * Number(items.quantity),
        0,
      ),
    [cartState.items],
  );
  const total = subTotal + deliveryFee;
  return (
    <View style={styles.container}>
      <Header title={'Delivery detail'} />
      <View style={{flex: 1, marginHorizontal: 25}}>
        <Text style={{...TextStyle.medium, width: 230,fontSize:16}}>
          Please enter your delivery details
        </Text>
        <Text style={{...TextStyle.regular, marginTop: 30}}>
          Who will receive this package?
        </Text>
        <View>
          <View style={{flexDirection: 'row'}}>
            <TextField
              keyboardType="default"
              placeholder="Name"
              mainContainerStyle={{flex: 1}}
            />
            <View style={{width: 10}}></View>
            <TextField
              keyboardType="number-pad"
              placeholder="Phone Number"
              mainContainerStyle={{flex: 1}}
            />
          </View>
          <LocationSearch text="Delivery location" containerStyle={{}} />
        </View>
       <View style={{justifyContent:'flex-end',flex:1}}>
       <View style={styles.priceDetails}>
              <Text style={[TextStyle.medium]}>Sub Total</Text>
              <Text style={[TextStyle.medium]}>{`₦${subTotal}`}</Text>
            </View>
            <View style={styles.priceDetails}>
              <Text style={[TextStyle.medium]}>Delivery fee</Text>
              <Text style={[TextStyle.medium]}>{`₦${deliveryFee}`}</Text>
            </View>
            <View style={styles.priceDetails}>
              <Text style={[TextStyle.medium]}>Total</Text>
              <Text style={[TextStyle.medium]}>{`₦${total}`}</Text>
            </View>
        <ButtonFlutterWave
          transactionReference={transactionReference.current ?? ''}
          email={authState.user?.email}
          amount={total}
          containerStyle={{
            marginVertical: 20,
          }}
          text="Continue to make payment"
        />
      </View>
       </View>
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
