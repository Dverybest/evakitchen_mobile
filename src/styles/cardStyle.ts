import {StyleSheet} from 'react-native';
import { black } from './colors';

const CardStyle = StyleSheet.create({
  card: {
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});

export default CardStyle;
