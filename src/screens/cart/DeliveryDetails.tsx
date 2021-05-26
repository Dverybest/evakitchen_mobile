import {RouteProp, useRoute} from '@react-navigation/core';
import React, {useContext, useRef} from 'react';
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

interface IDeliveryDetails {
  total: number;
}
const DeliveryDetails = () => {
  const {authState} = useContext(AuthContext);
  const transactionReference = useRef(uuidv4());
  const {
    params: {paymentDetails},
  }: RouteProp<
    {params: {paymentDetails: IDeliveryDetails}},
    'params'
  > = useRoute();
  console.log(authState.user?.email, paymentDetails.total);
  return (
    <View style={styles.container}>
      <Header title={'Delivery detail'} />
      <View style={{flex: 1, marginHorizontal: 25}}>
        <Text style={{...TextStyle.medium, width: 230}}>
          Please enter your delivery details
        </Text>
        <Text style={{...TextStyle.regular, marginTop: 49}}>
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
        <ButtonFlutterWave
          transactionReference={transactionReference.current ?? ''}
          email={authState.user?.email}
          amount={paymentDetails.total}
          containerStyle={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 20,
            marginTop: 95
          }}
          text="Continue to make payment"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});
export default DeliveryDetails;
