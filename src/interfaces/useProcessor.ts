import {Method} from 'axios';

export interface IMakeRequest {
  method: Method;
  payload?: any;
  url: string;
  retry?: () => void;
}
export interface IResponse {
  status: number;
  success: boolean;
  message: string;
  data: any | null;
}
export interface IMakeRequestResponse {
  response: IResponse | null;
  error: IResponse | null;
}
