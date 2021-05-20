import {useContext} from 'react';
import axios from 'axios';
import {AppContext} from '../context/appContext';
import {ActionType} from '../context/enums';
import {baseUrl} from './config';
import {IMakeRequest, IMakeRequestResponse} from '../interfaces/useProcessor';

axios.defaults.baseURL = baseUrl;

export const useRequestProcessor = () => {
  const {dispatchAppState} = useContext(AppContext);

  const makeRequest = async ({
    method,
    payload,
    url,
    retry = () => {},
  }: IMakeRequest) => {
    try {
      dispatchAppState({type: ActionType.IS_LOADING, payload: true});
      const result = await axios({
        url,
        method,
        data: payload,
      });
      return {
        response: {status: result.status, ...result.data},
        error: null,
      } as IMakeRequestResponse;
    } catch (error) {
      if (error?.response) {
        if (error.response.status >= 500) {
          dispatchAppState({
            type: ActionType.IS_SERVER_ERROR,
            payload: true,
          });
          return {response: null, error: null} as IMakeRequestResponse;
        } else {
          return {
            response: null,
            error: {status: error.response.status, ...error.response.data},
          } as IMakeRequestResponse;
        }
      } else {
        dispatchAppState({
          type: ActionType.IS_NETWORK_ERROR,
          payload: true,
        });
        dispatchAppState({
          type: ActionType.RETRY,
          payload: retry,
        });
        return {response: null, error: null} as IMakeRequestResponse;
      }
    } finally {
      dispatchAppState({type: ActionType.IS_LOADING, payload: false});
    }
  };
  return {makeRequest};
};
