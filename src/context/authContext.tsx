import React, {createContext, Dispatch, useEffect, useReducer} from 'react';
import {IAction, IContextProvider} from '../interfaces/common';
import {IAuthContext, IAuthState} from '../interfaces/authContext';
import {ActionType} from './enums';
import {saveToStorage, StorageNames} from './storage';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const reducer = (state: IAuthState, action: IAction) => {
  switch (action.type) {
    case ActionType.USER_DETAILS:
      return {...state, isAuthenticated: true, user: action.payload};
    case ActionType.LOG_OUT:
      return {...state, isAuthenticated: false, user: null};
    default:
      return state;
  }
};

export const AuthContext = createContext<IAuthContext>({
  authState: initialState,
  dispatchAuthState: () => undefined,
});

const AuthContextProvider = ({children}: IContextProvider) => {
  const [authState, dispatchAuthState] = useReducer(reducer, initialState);
  useEffect(() => {
    saveToStorage(StorageNames.AUTH, authState);
  }, [authState]);
  return (
    <AuthContext.Provider value={{authState, dispatchAuthState}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
