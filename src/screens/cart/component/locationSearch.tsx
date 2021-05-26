import React, {useState} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {black, grey, white100} from '../../../styles/colors';
import {TextStyle} from '../../../styles/textStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {GOOGLE_MAP_API_KEY} from '../../../api/config';

interface ILocationSearch {
  text: string;
  containerStyle: ViewStyle;
  placeholder?: string;
}

const LocationSearch = ({
  text,
  containerStyle,
  placeholder,
}: ILocationSearch) => {
  const [searchText, setSearchText] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [places, setPlaces] = useState([]);

  const searchLocation = async (searchText: string) => {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchText}&region=NG&language=en&components=country:ng&types=''&key=${GOOGLE_MAP_API_KEY}`;
    try {
      const response = await axios({
        url,
        method: 'GET',
      });
      console.log(response);
      setPlaces(response.data.results);
      setShowResults(true);
    } catch (error) {
      setShowResults(false);
      console.log(error);
    }
  };
  const setLocation = (loaction: string) => {
    setSearchText(loaction);
    setShowResults(false);
  };
  const clearField = () => {
    setSearchText('');
    setShowResults(false);
  };
  return (
    <View style={containerStyle}>
      <Text style={{...TextStyle.regular}}>{text}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={grey}
          value={searchText}
          onChangeText={text => {
            console.log(text);
            setSearchText(text);
            searchLocation(text);
          }}
        />
        {searchText.length > 0 ? (
          <AntDesign
            name="close"
            size={14}
            style={{alignSelf: 'center'}}
            color={black}
            onPress={clearField}
          />
        ) : null}
      </View>
      {showResults ? (
        <View
          style={{
            backgroundColor: white100,
            maxHeight: 175,
            paddingBottom: 10,
          }}>
          <FlatList
            data={places}
            keyExtractor={(_, index) => `items${index}`}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => setLocation(item.name)}
                style={{flexDirection: 'row', marginTop: 29}}>
                <EvilIcons
                  name="location"
                  style={{marginTop: 5}}
                  size={25}
                  color={black}
                />
                <View style={{width: 15}}></View>
                <View>
                  <Text style={{...TextStyle.medium}}>{item.name}</Text>
                  <Text style={{...TextStyle.regular}}>
                    {item.formatted_address}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  textInputContainer: {
    height: 50,
    borderRadius: 4,
    paddingHorizontal: 15,
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: grey,
    flexDirection: 'row',
  },
  textInput: {
    ...TextStyle.regular,
    flex: 1,
  },
});
export default LocationSearch;
