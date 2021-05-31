import React, {createContext, useEffect, useReducer} from 'react';
import {IAction} from '../interfaces/common';
import {
  IHomeScreenContextContext,
  IHomeScreenContextProvider,
  IHomeScreenState,
} from '../interfaces/homeScreenContext';
import {ActionType} from './enums';
import {saveToStorage, StorageNames} from './storage';

let initialState: IHomeScreenState = {
  popular: [],
  special: [],
  categories:[],
};

const reducer = (state: IHomeScreenState, action: IAction) => {
  switch (action.type) {
    case ActionType.SET_POPULAR_FOOD:
      return {
        ...state,
        popular: action.payload,
      };
    case ActionType.SET_SPECIAL_FOOD:
      return {
        ...state,
        special: action.payload,
      };
      case ActionType.SET_CATEGORIES:
        return {
          ...state,
          categories: action.payload,
        };
    default:
      return state;
  }
};

export const HomeScreenContext = createContext<IHomeScreenContextContext>({
  homeScreenState: initialState,
  dispatchHomeScreenState: () => undefined,
});

const HomeScreenContextProvider = ({
  children,
  value,
}: IHomeScreenContextProvider) => {
  initialState = value;
  const [homeScreenState, dispatchHomeScreenState] = useReducer(reducer, value);

  useEffect(() => {
    saveToStorage(StorageNames.FOOD, homeScreenState);
  }, [homeScreenState]);

  return (
    <HomeScreenContext.Provider
      value={{homeScreenState, dispatchHomeScreenState}}>
      {children}
    </HomeScreenContext.Provider>
  );
};

export default HomeScreenContextProvider;
