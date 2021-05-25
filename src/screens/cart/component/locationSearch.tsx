import React, {useState} from 'react';
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
  const places = [
    {
      name: 'Lifestyle and Golf City',
      address: 'Km 7, Enugu-PH expressway, Enugu.',
    },
    {
      name: 'Lifestyle and Golf City',
      address: 'Km 7, Enugu-PH expressway, Enugu.',
    },
    {
      name: 'Lifestyle and Golf City',
      address: 'Km 7, Enugu-PH expressway, Enugu.',
    },
    {
      name: 'Lifestyle and Golf City',
      address: 'Km 7, Enugu-PH expressway, Enugu.',
    },
  ];
  const [searchText, setSearchText] = useState('');
  return (
    <View style={containerStyle}>
      <Text style={{...TextStyle.regular}}>{text}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={grey}
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        {searchText.length > 0 ? (
          <AntDesign
            name="close"
            size={14}
            style={{alignSelf: 'center'}}
            color={black}
            onPress={() => setSearchText('')}
          />
        ) : null}
      </View>
      {searchText.length > 0 ? (
        <View style={{backgroundColor: white100, height: 175}}>
          <FlatList
            data={places}
            keyExtractor={(_, index) => `items${index}`}
            renderItem={({item}) => (
              <TouchableOpacity style={{flexDirection: 'row', marginTop: 29}}>
                <EvilIcons
                  name="location"
                  style={{marginTop: 5, marginRight: 15}}
                  size={25}
                  color={black}
                />
                <View>
                  <Text style={{...TextStyle.medium}}>{item.name}</Text>
                  <Text style={{...TextStyle.regular}}>{item.address}</Text>
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
