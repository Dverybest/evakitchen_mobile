import {useContext} from 'react';
import axios from 'axios';
import {AppContext} from '../context/appContext';
import {ActionType} from '../context/enums';
import {baseUrl} from './config';
import {IMakeRequest, IMakeRequestResponse} from '../interfaces/useProcessor';
import {fetchFromStorage, StorageNames} from '../context/storage';

const axiosApiInstance = axios.create();

axiosApiInstance.defaults.baseURL = baseUrl;
axiosApiInstance.interceptors.request.use(
  async config => {
    const result = await fetchFromStorage(StorageNames.AUTH);
    config.headers = {
      'x-auth-token': result?.authToken ?? null,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export const useRequestProcessor = () => {
  const {dispatchAppState} = useContext(AppContext);

  const makeRequest = async ({
    method,
    payload: data,
    url,
    retry = () => {},
  }: IMakeRequest) => {
    try {
      dispatchAppState({type: ActionType.IS_LOADING, payload: true});
      const result = await axiosApiInstance({
        url,
        method,
        data,
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
