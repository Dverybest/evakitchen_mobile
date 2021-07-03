import { Dispatch } from "react";
import { IAction} from "./common";
import { IUser } from "./user";

export interface IAuthState {
  isAuthenticated: boolean;
  user: IUser | null;
  token: string | null
}
export interface IAuthContext {
  authState: IAuthState;
  dispatchAuthState: Dispatch<IAction>;
}
