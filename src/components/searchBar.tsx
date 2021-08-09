import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {grey100, orange, white} from '../styles/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { heightConverter, widthConverter } from '../utils/pxToDpConvert';

interface ISearchBar {
  containerStyle?: ViewStyle;
  value: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
  placeholder: string;
}

const SearchBar = ({
  containerStyle,
  value,
  onChangeText,
  onPress,
  placeholder,
}: ISearchBar) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <AntDesign name={'search1'} size={heightConverter(24)} color={white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: grey100,
    height: heightConverter(50),
    borderRadius:  heightConverter(25)>widthConverter(25)?widthConverter(25):heightConverter(25),
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginLeft: widthConverter(20),
  },
  buttonContainer: {
    backgroundColor: orange,
    height: heightConverter(50),
    borderRadius:  heightConverter(25)>widthConverter(25)?widthConverter(25):heightConverter(25),
    justifyContent: 'center',
    paddingVertical: heightConverter(13),
    paddingHorizontal:widthConverter(26)
  },
});
export default SearchBar;
