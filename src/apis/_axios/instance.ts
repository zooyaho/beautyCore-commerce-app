import axios, { AxiosError } from 'axios';

import { CONFIG } from '@config';

import { getUserMe } from '@apis/user/userApi';

import { apiLogger } from '@utils/apiLogger';
import {
  TokenType,
  deleteToken,
  getToken,
  setToken,
} from '@utils/localStorage/token';
import { UserType, setUser } from '@utils/localStorage/user';
import styledConsole from '@utils/styledConsole';

import { AUTH_STATUS } from './../../constants/authStatus';

const isDev = CONFIG.ENV === 'development';

const instance = axios.create({
  baseURL: CONFIG.API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const setAuthHeader = (token: string) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

const unsetAuthHeader = () => {
  delete instance.defaults.headers.common['Authorization'];
};

instance.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    const isAccess = !!token && !!token.access;
    if (isAccess) {
      setAuthHeader(token.access as string);
      return {
        ...config,
        headers: { ...config.headers, Authorization: `Bearer ${token.access}` },
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (res) => {
    const { status, config: reqData, data: resData } = res;
    if (isDev) apiLogger({ status, reqData, resData });
    return res;
  },
  async (error: AxiosError) => {
    try {
      const { response: res, config: reqData } = error || {};
      const { status } = res || { status: 400 };
      const isUnAuthError = status === 401; // 사용자가 아닐 때
      const isExpiredToken = status === 444; // 만료된 토큰
      const isDev = CONFIG.ENV === 'development';

      if (isDev)
        apiLogger({ status, reqData, resData: error, method: 'error' });

      if (isExpiredToken) {
        try {
          const token = getToken();
          if (!token?.refresh) throw new Error('not found refresh-token');
          const { data: newToken }: { data: TokenType } = await instance.post(
            `/v1/user/refresh/`,
            { refresh: token.refresh },
          );
          setToken({ ...token, ...newToken });
          const userData = await getUserMe();
          setUser({
            user_id: userData.id,
            auth_status: AUTH_STATUS.LOGIN,
          } as UserType);
          return newToken;
        } catch (err) {
          deleteToken();
          throw err;
        }
        // return refresh(reqData);
      }

      if (isUnAuthError) {
        console.log('🔥isUnAuthError(401): ', isUnAuthError);
        deleteToken();
        return Promise.reject(error);
      }

      return Promise.reject(error);
    } catch (e) {
      styledConsole({
        //
        method: 'error',
        topic: 'UN_HANDLED',
        title: 'axios-interceptor',
        data: e,
      });
    }
  },
);

export { setAuthHeader, unsetAuthHeader };
export default instance;
