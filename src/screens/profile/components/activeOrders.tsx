import React from 'react';
import {FlatList} from 'react-native';
import OrderCard from './orderCard';
import img2 from '../../../assets/images/img2.jpg';

const ActiveOrders = () => {
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
    <FlatList
      data={orders}
      contentContainerStyle={{padding:24}}
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
  );
};

export default ActiveOrders;
