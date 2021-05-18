import {Dispatch} from 'react';
import {IAction} from './common';

export interface ICartState {
  items: {
    quantity: number;
    title: string;
    favourite: boolean;
    amount: number;
    description: string;
    rating: number;
  }[] | null;
}
export interface ICartContext {
  cartState: ICartState;
  dispatchCartState: Dispatch<IAction>;
}
