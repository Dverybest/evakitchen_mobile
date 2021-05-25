import {RouteProp, useRoute} from '@react-navigation/core';
import React, {useContext, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components/header';
import {TextField} from '../../components/textfield';
import {AuthContext} from '../../context/authContext';
import {black, grey, white100, white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import {v4 as uuidv4} from 'uuid';
import {TextInput} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {ButtonFlutterWave} from '../../components/buttons';

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
          <View>
            <Text style={{...TextStyle.regular}}>Delivery location</Text>
            <View style={styles.textInputContainer}>
              <TextInput style={styles.textInput} placeholderTextColor={grey} />
              <AntDesign
                name="close"
                size={14}
                style={{alignSelf: 'center'}}
                color={black}
              />
            </View>
            <View style={{paddingBottom: 29, backgroundColor: white100}}>
              <View style={{flexDirection: 'row', marginTop: 29}}>
                <EvilIcons
                  name="location"
                  style={{marginTop: 5, marginRight: 15}}
                  size={25}
                  color={black}
                />
                <View>
                  <Text style={{...TextStyle.medium}}>
                    Lifestyle and Golf City
                  </Text>
                  <Text style={{...TextStyle.regular}}>
                    Km 7, Enugu-PH expressway, Enugu.
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 29}}>
                <EvilIcons
                  name="location"
                  style={{marginTop: 5, marginRight: 15}}
                  size={25}
                  color={black}
                />
                <View>
                  <Text style={{...TextStyle.medium}}>
                    Lifestyle and Golf City
                  </Text>
                  <Text style={{...TextStyle.regular}}>
                    Km 7, Enugu-PH expressway, Enugu.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ButtonFlutterWave
          transactionReference={transactionReference.current ?? ''}
          email={authState.user?.email}
          amount={paymentDetails.total}
          containerStyle={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 20,
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
  textInputContainer: {
    height: 50,
    borderRadius: 4,
    paddingHorizontal: 15,
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: grey,
    flexDirection: 'row',
  },
  textInput: {
    ...TextStyle.regular,
    flex: 1,
  },
});
export default DeliveryDetails;
