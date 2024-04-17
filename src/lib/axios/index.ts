import Axios from 'axios';

import { env } from '@/constants/env';
import { refreshTokenApi } from '@/hooks/auth';
import { getSession } from 'next-auth/react';
export const AuthAxios = () => {
  const authRequestInterceptor = async (config: any) => {
    const session = await getSession();
    if (session?.backendTokens.accessToken) {
      let accessToken = session.backendTokens.accessToken;
      if (new Date().getTime() > session?.backendTokens?.jwtExpirationTime) {
        const newToken = await refreshTokenApi(
          session.backendTokens.refreshToken
        );
        accessToken = newToken.data.access_token;
      }
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    config.headers.Accept = 'application/json';

    return config;
  };
  const axios = Axios.create({
    baseURL: env.apiUrl,
  });
  axios.interceptors.request.use(authRequestInterceptor);

  return axios;
};
