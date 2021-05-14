import React, {createContext, Dispatch, useReducer} from 'react';
import {IAction, IContextProvider} from '../components/interface';
import {ContextActionType} from './enums';

interface IAppContext {
  isNetworkError: boolean;
  isServerError: boolean;
  isLoading: boolean;
}

const initialState = {
  isNetworkError: false,
  isServerError: false,
  isLoading: false,
};
export const AppContext = createContext<{
  appState: IAppContext;
  dispatchAppState: Dispatch<IAction>;
}>({appState: initialState, dispatchAppState: () => undefined});

const reducer = (state: IAppContext, action: IAction) => {
  switch (action.type) {
    case ContextActionType.IS_LOADING:
      return {...state, isLoading: action.payload};
    case ContextActionType.IS_SERVER_ERROR:
      return {...state, isServerError: action.payload};
    case ContextActionType.IS_NETWORK_ERROR:
      return {...state, isNetworkError: action.payload};
    default:
      return state;
  }
};

const AppContextProvider = ({children}: IContextProvider) => {
  const [appState, dispatchAppState] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{appState, dispatchAppState}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
