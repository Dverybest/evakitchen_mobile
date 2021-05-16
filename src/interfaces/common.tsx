import {ActionType} from '../context/enums';

export interface IAction {
  type: ActionType;
  payload: any;
}
export interface IContextProvider {
  children: React.Component;
}
