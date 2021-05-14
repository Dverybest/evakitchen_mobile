import {ImageSourcePropType} from 'react-native';

export interface ICategory {
  name: string;
  icon: ImageSourcePropType;
  onPress?: () => void;
}
export interface IFood {
  title: string;
  description: string;
  price: string;
  rating: String;
  img: ImageSourcePropType;
}
