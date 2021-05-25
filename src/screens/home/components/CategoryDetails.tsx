import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FoodCard from '../../../components/foodCard';
import SearchBar from '../../../components/searchBar';
import {white} from '../../../styles/colors';
import {Header} from '../../../components/header';
import {RouteProp, useRoute} from '@react-navigation/core';
import {useRequestProcessor} from '../../../api/requestProcessor';
import {IFood} from '../../../interfaces/menu';

const CategoryDetails = () => {
  const {
    params: {title},
  }: RouteProp<{params: {title: string}}, 'params'> = useRoute();
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
          ? `/menu?isPopular=${true}`
          : `/menu?isSpecial=${true}`,
    });
    if (error) {
      console.log(error.message, 'Error');
    } else if (response) {
      let data = response.data as {docs: IFood[]};
      setFoods(data.docs);
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
            marginBottom: 45,
          }}
          onPress={() => {}}
          value={searchText}
          onChangeText={text => setSearchText(text)}
          placeholder="What are you looking for?"
        />
        <FlatList
          data={foods}
          keyExtractor={(_, index) => `favourites${index}`}
          renderItem={({item}) => (
            <FoodCard
              image={item.image}
              rating={item.rating}
              // favourite={item.favourite}
              // setFavourite={item.setFavourite}
              name={item.name}
              price={item.price}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
});
export default CategoryDetails;
