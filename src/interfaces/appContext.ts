import { Dispatch } from "react";
import { IAction } from "./common";

export interface IAppState {
  isNetworkError: boolean;
  isServerError: boolean;
  isLoading: boolean;
}
export interface IAppContext {
  appState: IAppState;
  dispatchAppState: Dispatch<IAction>;
}
