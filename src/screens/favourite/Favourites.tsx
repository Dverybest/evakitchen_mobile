import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FoodCard from '../../components/foodCard';
import {Header} from '../../components/header';
import SearchBar from '../../components/searchBar';
import {white} from '../../styles/colors';

const Favourites = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [favourite, setFavourite] = useState(false);
  const favourites = [
    {
      image:
        'https://res.cloudinary.com/maryannokonkwo/image/upload/v1622041199/eva-kitchen/2021-05-26T14:59:59.829Z.png',
      rating: 4.6,
      favourite,
      setFavourite,
      text: 'Egusi Soup with assorted meat',
      amount: '1500',
    },
    {
      image:
        'https://res.cloudinary.com/maryannokonkwo/image/upload/v1622041199/eva-kitchen/2021-05-26T14:59:59.829Z.png',
      rating: 4.5,
      favourite,
      setFavourite,
      text: 'Egusi Soup with assorted meat',
      amount: '1300',
    },
  ];
  return (
    <View style={styles.container}>
      <Header title="Favourites" />
      <SearchBar
        containerStyle={{marginBottom: 36}}
        onPress={() => {}}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        placeholder="What are you looking for?"
      />
      <FlatList
        data={favourites}
        keyExtractor={(_, index) => `favourites${index}`}
        renderItem={({item, index}) => (
          <FoodCard
            key={index}
            image={item.image}
            rating={item.rating}
            favourite={item.favourite}
            setFavourite={item.setFavourite}
            name={item.text}
            price={item.amount}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: white,
    paddingHorizontal: 25,
  },
});
export default Favourites;
