import React from 'react';
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
import {TextInput} from 'react-native-gesture-handler';

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
  return (
    <View style={containerStyle}>
      <Text style={{...TextStyle.regular}}>{text}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={grey}
        />
        <AntDesign
          name="close"
          size={14}
          style={{alignSelf: 'center'}}
          color={black}
        />
      </View>
      <View style={{paddingBottom: 29, backgroundColor: white100}}>
        <TouchableOpacity style={{flexDirection: 'row', marginTop: 29}}>
          <EvilIcons
            name="location"
            style={{marginTop: 5, marginRight: 15}}
            size={25}
            color={black}
          />
          <View>
            <Text style={{...TextStyle.medium}}>Lifestyle and Golf City</Text>
            <Text style={{...TextStyle.regular}}>
              Km 7, Enugu-PH expressway, Enugu.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', marginTop: 29}}>
          <EvilIcons
            name="location"
            style={{marginTop: 5, marginRight: 15}}
            size={25}
            color={black}
          />
          <View>
            <Text style={{...TextStyle.medium}}>Lifestyle and Golf City</Text>
            <Text style={{...TextStyle.regular}}>
              Km 7, Enugu-PH expressway, Enugu.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
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
