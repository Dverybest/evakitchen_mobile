import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, ScrollView, View, Text} from 'react-native';
import SearchBar from '../../components/searchBar';
import {orange, white} from '../../styles/colors';
import Category from './components/Category';
import lunch from '../../assets/images/lunch.png';
import dinner from '../../assets/images/dinner.png';
import breakfast from '../../assets/images/breakfast.png';
import {ButtonWhite} from '../../components/buttons';
import {TextStyle} from '../../styles/textStyle';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img4 from '../../assets/images/img4.jpg';
import img8 from '../../assets/images/img7.jpg';
import img7 from '../../assets/images/img7.jpg';
import img6 from '../../assets/images/img6.jpg';
import FoodListView from './components/FoodListView';
import {useNavigation} from '@react-navigation/core';
import {ICategory, IFood} from '../../interfaces/menu';
import {useRequestProcessor} from '../../api/requestProcessor';

const HomeScreen = () => {
  const {navigate, addListener} = useNavigation();
  const [searchText, setSearchText] = useState<string>('');
  const [categories, setCategories] = useState<ICategory[]>([
    {name: 'Breakfast', icon: breakfast},
    {name: 'Lunch', icon: lunch},
    {name: 'Dinner', icon: dinner},
  ]);
  const [popular, setPopular] = useState<IFood[]>([
    {
      title: 'Ora Soup',
      description: 'Nigerian ganished jellof rice with chicken laps',
      price: '1500',
      rating: 5,
      img: img8,
      category: 'lunch',
    },
    {
      title: 'Ganished Jellof Rice',
      description: 'Fried rice with chicken laps',
      price: '1500',
      rating: 5,
      img: img1,
      category: 'dinner',
    },
    {
      title: 'Fried Rice',
      description: 'Fried rice with chicken laps',
      price: '1500',
      rating: 5,
      img: img2,
      category: 'lunch',
    },
    {
      title: 'Fried Rice',
      description: 'Fried rice with chicken laps',
      price: '1500',
      rating: 5,
      img: img4,
      category: 'lunch',
    },
  ]);
  const [special, setSpecial] = useState<IFood[]>([
    {
      title: 'Fried Rice',
      description: 'Fried rice with chicken laps',
      price: '1500',
      rating: 5,
      img: img6,
      category: 'lunch',
    },
    {
      title: 'Fried Rice',
      description: 'Fried rice with chicken laps',
      price: '1500',
      rating: 5,
      img: img7,
      category: 'lunch',
    },
    {
      title: 'Fried Rice',
      description: 'Fried rice with chicken laps',
      price: '1500',
      rating: 5,
      img: img2,
      category: 'lunch',
    },
    {
      title: 'Fried Rice',
      description: 'Fried rice with chicken laps',
      price: '1500',
      rating: 5,
      img: img4,
      category: 'lunch',
    },
  ]);
  const {makeRequest} = useRequestProcessor();
  useEffect(() => {
    const listener = addListener('focus', () => {
    fetchAllMenu()
  });
  return () => listener();
  }, [])
  const fetchAllMenu = async () => {
    const {response, error} = await makeRequest({
      method: 'get',
      url: '/menu',
    });
    if (error) {
      console.log(error.message, "Error");
    } else if (response) {
      console.log(response);
    }
  };
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            contentContainerStyle={{marginVertical: 20}}
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <Category
                key={index}
                name={item.name}
                icon={item.icon}
                onPress={() => navigate('CategoryDetails', {title: item.name})}
              />
            )}
            keyExtractor={(item, index) => `${index}`}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 21,
            }}>
            <Text style={[TextStyle.medium, {fontSize: 18}]}>Popular Food</Text>
            <ButtonWhite
              containerStyle={{height: 30}}
              textStyle={{fontSize: 9, paddingHorizontal: 15, color: orange}}
              text={'View all'}
              onPress={() =>
                navigate('CategoryDetails', {title: 'Popular Food'})
              }
            />
          </View>
          <FlatList
            data={popular}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item, index) => `popular${index}`}
            renderItem={({item, index}) => (
              <FoodListView item={item} index={index} />
            )}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 21,
              marginTop: 30,
            }}>
            <Text style={[TextStyle.medium, {fontSize: 18}]}>
              Special offers
            </Text>
            <ButtonWhite
              containerStyle={{height: 30}}
              textStyle={{fontSize: 9, paddingHorizontal: 15, color: orange}}
              text={'View all'}
              onPress={() =>
                navigate('CategoryDetails', {title: 'Special offers'})
              }
            />
          </View>
          <FlatList
            data={special}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item, index) => `special${index}`}
            renderItem={({item, index}) => (
              <FoodListView item={item} index={index} />
            )}
          />
        </View>
      </ScrollView>
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
export default HomeScreen;
