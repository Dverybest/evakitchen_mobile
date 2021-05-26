import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components/header';
import {white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';

const DeliveryDetails = () => {
  return (
    <View style={styles.container}>
      <Header title={'Delivery detail'} />
      <View style={{marginHorizontal: 25}}>
        <Text style={{...TextStyle.medium, width: 230}}>
          Please enter your delivery details
        </Text>
        <Text style={{...TextStyle.regular, marginTop: 49}}>
          Who will receive this package?
        </Text>
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
