import {ImageSourcePropType} from 'react-native';
import { ContextActionType } from '../context/enums';

export interface ICategory {
  name: string;
  icon: ImageSourcePropType;
  onPress?: () => void;
}
export interface IFood {
  title: string;
  description: string;
  price: string;
  rating: number;
  img: ImageSourcePropType;
}
export interface IAction {
  type: ContextActionType;
  payload: any;
}
export interface IContextProvider {
  children: React.Component;
}