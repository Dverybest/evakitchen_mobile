import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import empty from '../assets/images/empty.png';

const Empty = () => {
  return (
    <View style={style.container}>
      <Image
        source={empty}
        style={{height: 247, width: 241, resizeMode: 'contain'}}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  },
});
export default Empty;
