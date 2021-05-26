import {Dispatch} from 'react';
import {IAction, IContextProvider} from './common';

export interface ICart {
  quantity: number;
  name: string;
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

export interface ICartContextProvider  extends IContextProvider {
  value: ICartState
}
