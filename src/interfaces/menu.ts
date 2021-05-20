import {ImageSourcePropType} from 'react-native';

export interface ICategory {
    name: string;
    icon: ImageSourcePropType;
  }
export interface IFood {
  title: string;
  description?: string;
  price: string;
  rating: number;
  category?: string;
  img: ImageSourcePropType;
}
export interface IFoodListView {
    item:IFood,
    index:number
}
export interface ICategoryListView extends ICategory {
    onPress?: () => void;
  }