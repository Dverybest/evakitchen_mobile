import {Dispatch} from 'react';
import {IAction, IContextProvider} from './common';
import {ICategory, IFood} from './menu';

export interface IHomeScreenState {
  popular: IFood[];
  special: IFood[];
  categories :ICategory[]
}
export interface IHomeScreenContextContext {
  homeScreenState: IHomeScreenState;
  dispatchHomeScreenState: Dispatch<IAction>;
}

export interface IHomeScreenContextProvider extends IContextProvider {
  value: IHomeScreenState;
}
