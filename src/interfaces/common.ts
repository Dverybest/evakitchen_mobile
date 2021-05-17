import {ActionType} from '../context/enums';
import { IAuthState } from './authContext';

export interface IAction {
  type: ActionType;
  payload: any;
}
export interface IContextProvider {
  children: React.ReactElement;
}

export interface IAuthContextProvider  extends IContextProvider {
  value: IAuthState | null
}
