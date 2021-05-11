import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {grey, orange, white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import {Header} from '../../components/header';
import OrderCard from './components/orderCard';
import img2 from '../../assets/images/img2.jpg';
import {string} from 'yup/lib/locale';

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const orders = [
    {
      image: img2,
      quantity: 2,
      title: 'Egusi soup',
      orderId: '#26234455',
      arrival: 2,
      status: 'Food on the way',
    },
    {
      image: img2,
      quantity: 2,
      title: 'Egusi soup',
      orderId: '#26234455',
      arrival: 2,
      status: 'Food on the way',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView></ScrollView>
      <Header title="My orders" showGoBack={true} />
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
      {/* <View style={{marginTop: 43}}> */}
        <FlatList
          data={orders}
          keyExtractor={(item, index) => `orders${index}`}
          renderItem={({item, index}) => (
            <OrderCard
              index={index}
              image={item.image}
              quantity={item.quantity}
              title={item.title}
              orderId={item.orderId}
              arrival={item.arrival}
              status={item.status}
              primaryButtonTitle="Track order"
              secondaryButtonTitle="Cancel"
            />
          )}
        />
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  tabContainer: {
    marginTop: 39,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 150,
    borderWidth: 1,
    borderColor: grey,
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
