import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FoodCard from '../../../components/foodCard';
import SearchBar from '../../../components/searchBar';
import {white} from '../../../styles/colors';
import {Header} from '../../../components/header';
import {RouteProp, useRoute} from '@react-navigation/core';
import {useRequestProcessor} from '../../../api/requestProcessor';
import {IFood} from '../../../interfaces/menu';
import Empty from '../../../components/empty';

const CategoryDetails = () => {
  const {
    params: {title,id},
  }: RouteProp<{params: {title: string,id:string}}, 'params'> = useRoute();
  const {makeRequest} = useRequestProcessor();
  const [searchText, setSearchText] = useState<string>('');
  const [foods, setFoods] = useState<IFood[]>([]);
  useEffect(() => {
    fetchFoods();
  }, []);
  const fetchFoods = async () => {
    const {response, error} = await makeRequest({
      method: 'get',
      url:
        title === 'Popular Food'
          ? `/menu/getPopular`:
          title === 'Popular Food'?
          `/menu?isSpecial=${true}`:
          `/menu?category=${id}`
    });
    if (error) {
      console.log(error.message, 'Error');
    } else if (response) {
      let data:IFood[] = [];
      if(title === 'Popular Food'){
        data = response.data as IFood[];  
      }else{
        data = response.data.docs as IFood[];  
      }
      setFoods(data);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: white,
      }}>
      <Header title={title} showGoBack />
      <View style={styles.container}>
        <SearchBar
          containerStyle={{
            marginBottom: 25,
          }}
          onPress={() => {}}
          value={searchText}
          onChangeText={text => setSearchText(text)}
          placeholder="What are you looking for?"
        />
        <FlatList
          data={foods}
          keyExtractor={(_, index) => `favourites${index}`}
          contentContainerStyle={{paddingBottom:100}}
          renderItem={({item}) => (
            <FoodCard
              image={item.image}
              rating={item.rating}
              description={item.description}
              // setFavourite={item.setFavourite}
              name={item.name}
              price={item.price}
            />
          )}
        />
        {
          foods.length===0?
          <Empty text={'No food in this menu category'}/>
          :null
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom:20
  },
});
export default CategoryDetails;
