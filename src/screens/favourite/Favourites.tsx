import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FoodCard from '../../components/foodCard';
import SearchBar from '../../components/searchBar';
import {white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';

const Favourites = () => {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <View style={styles.container}>
      <SearchBar
        containerStyle={{
          marginTop: 25,
        }}
        onPress={() => {}}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        placeholder="What are you looking for?"
      />
      <View style={{alignItems: 'center', marginTop: 19, marginBottom: 34}}>
        <Text style={{...TextStyle.semiBold}}>Favourites</Text>
      </View>
      <FoodCard />
      <FoodCard />
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
