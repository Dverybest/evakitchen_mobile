import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import SearchBar from '../../components/searchBar';
import {orange, white} from '../../styles/colors';
import Category from './components/Category';
import {ButtonWhite} from '../../components/buttons';
import {TextStyle} from '../../styles/textStyle';
import FoodListView from './components/FoodListView';
import {useNavigation} from '@react-navigation/core';
import {IFood} from '../../interfaces/menu';
import {useRequestProcessor} from '../../api/requestProcessor';
import {HomeScreenContext} from '../../context/homeScreenContext';
import {ActionType} from '../../context/enums';
import banner from '../../assets/images/banner.png';

const HomeScreen = () => {
  const {navigate} = useNavigation();
  const [searchText, setSearchText] = useState<string>('');

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
        url: `/menu/getPopular`,
      }),
      makeRequest({
        method: 'get',
        url: `/menu/getSpecial`,
      }),
      makeRequest({
        method: 'get',
        url: `/categories`,
      }),
    ])
      .then(result => {
        const {response, error} = result[0];
        if (error) {
          console.log(error.message, 'Error');
        } else if (response) {
          let data = response.data; //as {docs: IFood[]};
          dispatchHomeScreenState({
            payload: data,
            type: ActionType.SET_POPULAR_FOOD,
          });
        }
        const {response: res, error: err} = result[1];
        if (err) {
          console.log(err.message, 'Error');
        } else if (res?.data) {
          let data = res.data as  IFood[];
          console.log(data);
          
          dispatchHomeScreenState({
            payload: data,
            type: ActionType.SET_SPECIAL_FOOD,
          });
          const {response: catResponse, error: catError} = result[2];
          if (catError) {
            console.log(catError.message, 'Error');
          } else if (catResponse) {
            dispatchHomeScreenState({
              type: ActionType.SET_CATEGORIES,
              payload: catResponse.data,
            });
          }
        }
      })
      .catch();
  };
  return (
    <View style={styles.container}>
      <SearchBar
        containerStyle={{
          marginTop: 19,
        }}
        onPress={() => {}}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        placeholder="What are you looking for?"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text
            style={[
              TextStyle.medium,
              {marginTop: 12, marginBottom: 8, fontSize: 18},
            ]}>
            Categories
          </Text>
          <FlatList
            data={homeScreenState.categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <Category
                key={index}
                name={item.name}
                image={item.image}
                onPress={() => navigate('CategoryDetails', {title: item.name,id:item._id})}
              />
            )}
            keyExtractor={(_, index) => `${index}`}
          />
        </View>
        <View
          style={{
            marginVertical: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 8,
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
            data={homeScreenState.popular.slice(0, 4)}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(_, index) => `popular${index}`}
            renderItem={({item, index}) => (
              <FoodListView item={item} index={index} />
            )}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={banner}
            style={{
              flex: 1,
              height: 120,
            }}
          />
        </View>
        <View style={{paddingBottom:15}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 15,
            }}>
            <Text style={[TextStyle.medium, {fontSize: 18}]}>
              Special Offers
            </Text>
            <ButtonWhite
              containerStyle={{height: 30}}
              textStyle={{fontSize: 9, paddingHorizontal: 15, color: orange}}
              text={'View all'}
              onPress={() =>
                navigate('CategoryDetails', {title: 'Special Offers'})
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
    paddingHorizontal: 20,
  },
});
export default HomeScreen;
