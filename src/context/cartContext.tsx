import React, {createContext, useEffect, useReducer} from 'react';
import {IAction} from '../interfaces/common';
import {ActionType} from './enums';
import {ICartContext, ICartContextProvider, ICartState} from '../interfaces/cartContext';
import { saveToStorage, StorageNames } from './storage';

let initialState:ICartState = {
  items: [],
};

const reducer = (state: ICartState, action: IAction) => {
  const {items} = state;
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        items: [...items, action.payload],
      };
    case ActionType.REMOVE_FROM_CART:
      return {...state, items: []};
    default:
      return state;
  }
};

export const CartContext = createContext<ICartContext>({
  cartState: initialState,
  dispatchCartState: () => undefined,
});

const CartContextProvider = ({children, value}: ICartContextProvider) => {
  initialState = value
  const [cartState, dispatchCartState] = useReducer(reducer,value);
  console.log({value, cartState});

  useEffect(() => {
    saveToStorage(StorageNames.CART, cartState);
  }, [cartState]);

  return (
    <CartContext.Provider value={{cartState, dispatchCartState}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
