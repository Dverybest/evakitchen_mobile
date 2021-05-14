import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FoodCard from '../../components/foodCard';
import SearchBar from '../../components/searchBar';
import {white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import img2 from '../../assets/images/img2.jpg';

const Favourites = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [favourite, setFavourite] = useState(false);
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
      <FoodCard
        image={img2}
        rating={4.6}
        favourite={favourite}
        setFavourite={setFavourite}
        text="Egusi Soup with assorted meat"
        amount={1500}
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
