import { BACKEND_URL, REQUEST_TIMEOUT, ERROR_MESSAGE } from '../const';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';
import { dropToken, getToken } from './token';

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.NOT_FOUND]: true,
  [StatusCodes.INTERNAL_SERVER_ERROR]: true,
};
const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];
const shouldUnauthorizedError = (response: AxiosResponse) => response.status === StatusCodes.UNAUTHORIZED;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);
        toast.warn(detailMessage.message);
      } else if (error.response && shouldUnauthorizedError(error.response)) {
        dropToken();
      } else {
        toast.warn(ERROR_MESSAGE);
      }

      throw error;
    }
  );

  return api;
};
