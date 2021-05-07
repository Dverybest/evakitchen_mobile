import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ICategory, IFood} from '../../components/interface';
import SearchBar from '../../components/searchBar';
import {black300, orange, orange300, white} from '../../styles/colors';
import Category from './compontent/Category';
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

const HomeScreen = () => {
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
      rating: '5',
      img: img8,
    },
    {
      title: 'Ganished Jellof Rice',
      description: 'Fried rice with chicken laps',
      price: '1500',
      rating: '5',
      img: img1,
    },
    {
      title: 'Fried Rice',
      description: 'Fried rice with chicken laps',
      price: '1500',
      rating: '5',
      img: img2,
    },
    {
      title: 'Fried Rice',
      description: 'Fried rice with chicken laps',
      price: '1500',
      rating: '5',
      img: img4,
    },
  ]);
  const [special, setSpecial] = useState<IFood[]>([
    {
      title: 'Fried Rice',
      description: 'Fried rice with chicken laps',
      price: '1500',
      rating: '5',
      img: img6,
    },
    {
      title: 'Fried Rice',
      description: 'Fried rice with chicken laps',
      price: '1500',
      rating: '5',
      img: img7,
    },
    {
      title: 'Fried Rice',
      description: 'Fried rice with chicken laps',
      price: '1500',
      rating: '5',
      img: img2,
    },
    {
      title: 'Fried Rice',
      description: 'Fried rice with chicken laps',
      price: '1500',
      rating: '5',
      img: img4,
    },
  ]);
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
            contentContainerStyle={{marginTop: 50}}
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <Category key={index} name={item.name} icon={item.icon} />
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
              marginTop: 30,
            }}>
            <Text style={[TextStyle.medium, {fontSize: 18}]}>Popular Food</Text>
            <ButtonWhite
              containerStyle={{height: 30}}
              textStyle={{fontSize: 9, paddingHorizontal: 15, color: orange}}
              text={'View all'}
            />
          </View>
          <FlatList
            data={popular}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item, index) => `popular${index}`}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    marginRight: 13,
                    height: 166,
                    borderRadius: 8,
                    width: 151,
                  }}
                  key={index}>
                  <Image
                    style={{
                      height: 166,
                      width: 151,
                      resizeMode: 'cover',
                      borderRadius: 8,
                    }}
                    source={item.img}
                  />
                  <View
                    style={{
                      height: 166,
                      borderRadius: 8,
                      width: 151,
                      paddingHorizontal:10,
                      justifyContent:'flex-end',
                      backgroundColor: black300,
                      position: 'absolute',
                      paddingBottom:22
                    }}>
                        <Text numberOfLines={1} style={[TextStyle.medium,{color:white}]}>{item.title}</Text>
                        <Text numberOfLines={2}  style={[TextStyle.regular,{color:white,fontSize:8}]}>{item.description}</Text>
                        <View>
                            <Text style={[TextStyle.regular,{color:white,fontSize:12}]}>{`₦${item.price}`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
              );
            }}
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
            />
          </View>
          <FlatList
            data={special}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item, index) => `special${index}`}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    marginRight: 13,
                    height: 166,
                    borderRadius: 8,
                    width: 151,
                  }}
                  key={index}>
                  <Image
                    style={{
                      height: 166,
                      width: 151,
                      resizeMode: 'cover',
                      borderRadius: 8,
                    }}
                    source={item.img}
                  />
                  <View
                    style={{
                      height: 166,
                      borderRadius: 8,
                      width: 151,
                      backgroundColor: black300,
                      position: 'absolute',
                    }}></View>
                </TouchableOpacity>
              );
            }}
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
