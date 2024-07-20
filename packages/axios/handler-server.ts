import axios, {
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from 'axios';
import queryString from 'qs';

export const config: CreateAxiosDefaults = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const client = axios.create(config);

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    config.paramsSerializer = (params) =>
      queryString.stringify(params, { indices: false });
    return config;
  },
  (error: any) => {
    throw {
      ...(error?.response?.data ?? error?.response ?? error),
      status: error?.response?.status,
    };
  },
);

client.interceptors.response.use(
  (config: AxiosResponse<any>) => config,
  (error: any) => {
    throw {
      ...(error?.response?.data ?? error?.response ?? error),
      status: error?.response?.status,
    };
  },
);

export default client;
