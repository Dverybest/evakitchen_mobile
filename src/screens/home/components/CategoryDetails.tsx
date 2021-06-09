import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import FoodCard from '../../../components/foodCard';
import SearchBar from '../../../components/searchBar';
import {black, white} from '../../../styles/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RouteProp, useRoute} from '@react-navigation/core';
import {useRequestProcessor} from '../../../api/requestProcessor';
import {IFood} from '../../../interfaces/menu';
import {useNavigation} from '@react-navigation/native';
import Empty from '../../../components/empty';
import { TextStyle } from '../../../styles/textStyle';

const CategoryDetails = () => {
  const {
    params: {title, id,search},
  }: RouteProp<{params: {title: string; id: string,search?:string}}, 'params'> = useRoute();
  const {makeRequest} = useRequestProcessor();
  const [searchText, setSearchText] = useState<string>(search??'');
  const [foods, setFoods] = useState<IFood[]>([]);
  const {goBack} = useNavigation();
 
  const generateQuery= (url:string)=>{
    return searchText? `${url}?search=${searchText}`:url
  }
  const fetchFoods = async () => {
    const {response, error} = await makeRequest({
      method: 'get',
      url:
        title === 'Popular Food'
          ? generateQuery(`/menu/getPopular`)
          : title === 'Search'
          ?generateQuery(`/menu`)
          : title === 'Special Offers'
          ? generateQuery(`/menu/getSpecial`)
          : `/menu?category=${id}${searchText?`&search=${searchText}`:''}`,
    });
    if (error) {
      console.log(error.message, 'Error');
    } else if (response) {
      let data: IFood[] = [];
      if (title === 'Popular Food'||title ==='Special Offers' ) {
        data = response.data as IFood[];
      } else {
        data = response.data.docs as IFood[];
      }
      setFoods(data);
    }
  };
  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: white,
      }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 15,
            marginLeft:11,
            marginRight:23
          }}>
          <AntDesign color={black} onPress={goBack} size={20} name="left" />
          <SearchBar
            containerStyle={{
              flex: 1,
              marginLeft: 7,
            }}
            onPress={fetchFoods}
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholder="What are you looking for?"
          />
        </View>
      <View style={styles.container}>
        <Text style={[TextStyle.semiBold,{marginBottom:15}]}>{title}</Text>
        <FlatList
          data={foods}
          keyExtractor={(_, index) => `favourites${index}`}
          contentContainerStyle={{paddingBottom: 100}}
          ListEmptyComponent={<Empty text={'No food in this menu category'} />}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
export default CategoryDetails;
