import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FoodCard from '../../../components/foodCard';
import SearchBar from '../../../components/searchBar';
import {white} from '../../../styles/colors';
import img2 from '../../../assets/images/img2.jpg';
import {Header} from '../../../components/header';
import {RouteProp, useRoute} from '@react-navigation/core';

const CategoryDetails = () => {
  const {
    params: {title},
  }: RouteProp<{params: {title: string}}, 'params'> = useRoute();
  const [searchText, setSearchText] = useState<string>('');
  const [favourite, setFavourite] = useState(false);
  const favourites = [
    {
      image: img2,
      rating: 4.6,
      favourite,
      setFavourite,
      text: 'Egusi Soup with assorted meat',
      amount: '1500',
    },
    {
      image: img2,
      rating: 4.5,
      favourite,
      setFavourite,
      text: 'Egusi Soup with assorted meat',
      amount: '1300',
    },
  ];
  return (
    <View
      style={{
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
          data={favourites}
          keyExtractor={(item, index) => `favourites${index}`}
          renderItem={({item, index}) => (
            <FoodCard
              img={item.image}
              rating={item.rating}
              favourite={item.favourite}
              setFavourite={item.setFavourite}
              title={item.text}
              price={item.amount}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 25,
  },
});
export default CategoryDetails;
