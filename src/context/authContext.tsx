import React, {createContext, Dispatch, useReducer} from 'react';
import {IAction, IContextProvider, IUser} from '../components/interface';
import {ContextActionType} from './enums';

interface IAppContext {
  isAuthenticated: boolean;
  user: IUser | null;
}

const initialState = {
  isAuthenticated: false,
  user: null,
};
export const AuthContext = createContext<{
  authState: IAppContext;
  dispatchAuthState: Dispatch<IAction>;
}>({authState: initialState, dispatchAuthState: () => undefined});

const reducer = (state: IAppContext, action: IAction) => {
  switch (action.type) {
    case ContextActionType.USER_DETAILS:
      return {...state, isAuthenticated: true, user: action.payload};
    case ContextActionType.LOG_OUT:
      return {...state, isAuthenticated: false, user: null};
    default:
      return state;
  }
};

const AuthContextProvider = ({children}: IContextProvider) => {
  const [authState, dispatchAuthState] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{authState, dispatchAuthState}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
