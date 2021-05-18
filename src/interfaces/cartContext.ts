import {Dispatch} from 'react';
import {IAction} from './common';

export interface ICart {
  quantity: number;
  title: string;
  favourite?: boolean;
  amount: number;
  description?: string;
  rating?: number;
}

export interface ICartState {
  items: ICart[] 
}
export interface ICartContext {
  cartState: ICartState;
  dispatchCartState: Dispatch<IAction>;
}
