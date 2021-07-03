import {Dispatch} from 'react';
import {IAction, IContextProvider} from './common';

export interface ICart {
  quantity: number;
  name: string;
  discount:number
  favourite?: boolean;
  amount: number;
  description?: string;
  rating?: number;
  _id:string
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
