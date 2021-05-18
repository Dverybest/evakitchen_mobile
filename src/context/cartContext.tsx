import React, {createContext, useReducer} from 'react';
import {IAction, IContextProvider} from '../interfaces/common';
import {ActionType} from './enums';
import {ICartContext, ICartState} from '../interfaces/cartContext';

const initialState = {
  items: null,
};

const reducer = (state: ICartState, action: IAction) => {
  const {items} = state;
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        items: items?.length ? [...items, action.payload] : [action.payload],
      };
    case ActionType.REMOVE_FROM_CART:
      return {...state, items: null};
    default:
      return state;
  }
};

export const CartContext = createContext<ICartContext>({
  cartState: initialState,
  dispatchCartState: () => undefined,
});

const CartContextProvider = ({children}: IContextProvider) => {
  const [cartState, dispatchCartState] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{cartState, dispatchCartState}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
