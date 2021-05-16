import React, {createContext, Dispatch, useReducer} from 'react';
import {IAction, IContextProvider} from '../interfaces/common';
import {IAppContext, IAppState} from '../interfaces/appContext';
import {ActionType} from './enums';

const initialState = {
  isNetworkError: false,
  isServerError: false,
  isLoading: false,
};

const reducer = (state: IAppState, action: IAction) => {
  switch (action.type) {
    case ActionType.IS_LOADING:
      return {...state, isLoading: action.payload};
    case ActionType.IS_SERVER_ERROR:
      return {...state, isServerError: action.payload};
    case ActionType.IS_NETWORK_ERROR:
      return {...state, isNetworkError: action.payload};
    default:
      return state;
  }
};

export const AppContext = createContext<IAppContext>({
  appState: initialState,
  dispatchAppState: () => undefined,
});

const AppContextProvider = ({children}: IContextProvider) => {
  const [appState, dispatchAppState] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{appState, dispatchAppState}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
