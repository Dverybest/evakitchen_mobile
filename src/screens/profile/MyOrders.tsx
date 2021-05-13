import React, {Fragment, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {grey, grey100, orange, white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import {Header} from '../../components/header';
import ActiveOrders from './components/activeOrders';
import OrderHistory from './components/orderHistory';
import Empty from '../../components/empty';

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const error = false;
  return (
    <View style={styles.container}>
      <Header title="My orders" showGoBack={true} />
      <View style={{flex:1}}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={activeTab === 1 ? styles.active : styles.inactive}
          onPress={() => setActiveTab(1)}>
          <Text
            style={[
              {...TextStyle.regular},
              activeTab === 1 ? {color: white} : {color: orange},
            ]}>
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={activeTab === 2 ? styles.active : styles.inactive}
          onPress={() => setActiveTab(2)}>
          <Text
            style={[
              {...TextStyle.regular},
              activeTab === 2 ? {color: white} : {color: orange},
            ]}>
            History
          </Text>
        </TouchableOpacity>
      </View>
      {error ? (
        <Empty />
      ) : activeTab === 1 ? (
        <ActiveOrders />
      ) : (
        <OrderHistory />
      )}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:white,
  },
  tabContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 150,
    borderWidth: 1,
    borderColor: grey100,
  },
  active: {
    backgroundColor: orange,
    height: 50,
    width: 160.68,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  inactive: {
    height: 50,
    width: 160.68,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: grey,
  },
});
export default MyOrders;
