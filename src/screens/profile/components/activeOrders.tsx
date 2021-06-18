import React, { useEffect, useState } from 'react';
import {FlatList} from 'react-native';
import OrderCard from './orderCard';
import Empty from '../../../components/empty';
import { useRequestProcessor } from '../../../api/requestProcessor';

const ActiveOrders = () => {
  const [orders, setOrders]: any = useState([]);
  const {makeRequest} = useRequestProcessor();

  const getActiveOrders = async () => {
    const {response, error} = await makeRequest({
      url: '/user/order?status=active',
      method: 'get',
    });

    if (error) {
      console.log(error.message);
    } else if (response) {
      setOrders(response.data.docs);
    }
  };
  useEffect(() => {
    getActiveOrders ();
  }, []);
  return (
    <FlatList
      data={orders}
      contentContainerStyle={{padding: 24}}
      keyExtractor={(_, index) => `orders${index}`}
      ListEmptyComponent={<Empty text={'No active orders'} />}
      renderItem={({item, index}) => (
        <OrderCard
          index={index}
          image={item.orderItems[0].menu.image}
          quantity={item.orderItems.length}
          title={item.orderItems[0].menu.name}
          amount={item.total}
          orderId={item.orderId}
          arrival={30}
          status={item.status}
          primaryButtonTitle="Track order"
          secondaryButtonTitle="Cancel"
        />
      )}
    />
  );
};

export default ActiveOrders;
