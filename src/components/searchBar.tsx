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
        <AntDesign name={'search1'} size={24} color={white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: grey100,
    height: 50,
    borderRadius: 25,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginLeft: 20,
  },
  buttonContainer: {
    backgroundColor: orange,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    padding: 15,
  },
});
export default SearchBar;
