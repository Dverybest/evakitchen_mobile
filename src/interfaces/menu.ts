import {ImageSourcePropType} from 'react-native';

export interface ICategory {
    name: string;
    icon: ImageSourcePropType;
  }
export interface IFood {
  name: string;
  description?: string;
  discount?: 0;
  price: string;
  rating?: number;
  category?: string;
  image: string;
}
export interface IFoodListView {
    item:IFood,
    index:number
}
export interface ICategoryListView extends ICategory {
    onPress?: () => void;
  }