import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CardStyle from '../../styles/cardStyle';
import {grey, orange, white} from '../../styles/colors';
import img2 from '../../assets/images/img2.jpg';

const MyOrders = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.active}>
          <Text>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactive}>
          <Text>History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View>
          <Image source={img2} />
        </View>
        <View></View>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  tabContainer: {
    marginTop: 39,
    height: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 25,
  },
  active: {
    backgroundColor: orange,
    height: 50,
    width: 160.68,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactive: {
    height: 50,
    width: 149.32,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: grey,
  },
  card: {
    ...CardStyle.card,
    alignItems: 'center',
    backgroundColor: white,
    paddingHorizontal: 21,
    paddingVertical: 16,
    height: 213,
    marginTop: 43,
    flexDirection: 'row'
  },
});
export default MyOrders;
