import React from 'react';
import {FlatList} from 'react-native';
import OrderCard from './orderCard';
import img2 from '../../../assets/images/img2.jpg';

const OrderHistory = () => {
  const orders = [
    {
      image: img2,
      quantity: 2,
      title: 'Egusi soup',
      amount: 1500,
      date: "Tue 24, Jun 10:30am",
      status: 'Order delivered',
    },
    {
      image: img2,
      quantity: 2,
      title: 'Egusi soup',
      amount: 1500,
      date: "Tue 24, Jun 10:30am",
      status: 'Order delivered',
    },
    {
      image: img2,
      quantity: 2,
      title: 'Egusi soup',
      amount: 1500,
      date: "Tue 24, Jun 10:30am",
      status: 'Order delivered',
    },
  ];
  return (
    <FlatList
      data={orders}
      keyExtractor={(item, index) => `history${index}`}
      contentContainerStyle={{padding:24}}
      renderItem={({item, index}) => (
        <OrderCard
          index={index}
          image={item.image}
          quantity={item.quantity}
          title={item.title}
          amount={item.amount}
          date={item.date}
          status={item.status}
          primaryButtonTitle="Re-order"
          secondaryButtonTitle="Rate"
        />
      )}
    />
  );
};

export default OrderHistory;
