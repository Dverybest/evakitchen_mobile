import React from 'react';
import {FlatList} from 'react-native';
import OrderCard from './orderCard';
import img2 from '../../../assets/images/img2.jpg';
import Empty from '../../../components/empty';
import {useState} from 'react';
import {useRequestProcessor} from '../../../api/requestProcessor';
import {useEffect} from 'react';

const OrderHistory = () => {
  const [orders, setOrders]: any = useState([]);
  const {makeRequest} = useRequestProcessor();

  const handleOrderHistory = async () => {
    const {response, error} = await makeRequest({
      url: '/user/order',
      method: 'get',
    });

    if (error) {
      console.log(error.message);
    } else if (response) {
      setOrders(response.data.docs);
    }
  };
  useEffect(() => {
    handleOrderHistory();
  }, []);
  return (
    <FlatList
      data={orders}
      keyExtractor={(_, index) => `history${index}`}
      contentContainerStyle={{padding: 24}}
      ListEmptyComponent={<Empty text={'No orders yet'} />}
      renderItem={({item, index}) => {
        // console.log(item);
        return (
          <OrderCard
            index={index}
            image={item.orderItems[0].menu.image}
            quantity={item.orderItems.length}
            title={item.orderItems[0].menu.name}
            amount={item.total}
            date={new Date(item.createdAt).toDateString()}
            status={item.status}
            primaryButtonTitle="Re-order"
            secondaryButtonTitle="Rate"
          />
        );
      }}
    />
  );
};

export default OrderHistory;
