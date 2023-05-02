import jwtDecode from 'jwt-decode';

import type { IAuthContext, IDecodedToken } from '@/types';

import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from '@/helpers';

const getDefaultAuthContext = (): IAuthContext => ({
  accessToken: getLocalStorageItem('token') ?? null,
  isLoading: true,
  user: null,
  setAccessToken: (access_token) => {
    setLocalStorageItem('token', access_token);
  },
  isAuthTokenExpired: function () {
    try {
      const decodedToken = jwtDecode<IDecodedToken>(this.accessToken as string);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp < currentTime;
    } catch (error) {
      return true;
    }
  },
  setActiveUser: function (user) {
    this.user = user;
  },
  logout: function () {
    removeLocalStorageItem('token');
    this.accessToken = null;
    this.user = null;
  },
});

export default getDefaultAuthContext;
