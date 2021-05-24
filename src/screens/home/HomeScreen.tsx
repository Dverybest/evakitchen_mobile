import React, {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, ScrollView, View, Text} from 'react-native';
import SearchBar from '../../components/searchBar';
import {orange, white} from '../../styles/colors';
import Category from './components/Category';
import lunch from '../../assets/images/lunch.png';
import dinner from '../../assets/images/dinner.png';
import breakfast from '../../assets/images/breakfast.png';
import {ButtonWhite} from '../../components/buttons';
import {TextStyle} from '../../styles/textStyle';
import FoodListView from './components/FoodListView';
import {useNavigation} from '@react-navigation/core';
import {ICategory, IFood} from '../../interfaces/menu';
import {useRequestProcessor} from '../../api/requestProcessor';
import {HomeScreenContext} from '../../context/homeScreenContext';
import {ActionType} from '../../context/enums';

const HomeScreen = () => {
  const {navigate} = useNavigation();
  const [searchText, setSearchText] = useState<string>('');
  const [categories, setCategories] = useState<ICategory[]>([
    {name: 'Breakfast', icon: breakfast},
    {name: 'Lunch', icon: lunch},
    {name: 'Dinner', icon: dinner},
  ]);
  const {homeScreenState, dispatchHomeScreenState} = useContext(
    HomeScreenContext,
  );
  const {makeRequest} = useRequestProcessor();
  useEffect(() => {
      fetchAllFoods();
  }, []);

  const fetchAllFoods = () => {
    Promise.all([
      makeRequest({
        method: 'get',
        url: `/menu?isPopular=${true}`,
      }),
      makeRequest({
        method: 'get',
        url: `/menu?isSpecial=${true}`,
      }),
    ])
      .then(result => {
        const {response, error} = result[0];
        if (error) {
          console.log(error.message, 'Error');
        } else if (response) {
          let data = response.data as {docs: IFood[]};
          dispatchHomeScreenState({
            payload: data.docs,
            type: ActionType.SET_POPULAR_FOOD,
          });
        }
        const {response: res, error: err} = result[1];
        if (err) {
          console.log(err.message, 'Error');
        } else if (res) {
          let data = res.data as {docs: IFood[]};
          dispatchHomeScreenState({
            payload: data.docs,
            type: ActionType.SET_SPECIAL_FOOD,
          });
        }
      })
      .catch();
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
            keyExtractor={(_, index) => `${index}`}
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
            data={homeScreenState.popular}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(_, index) => `popular${index}`}
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
            data={homeScreenState.special}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(_, index) => `special${index}`}
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
