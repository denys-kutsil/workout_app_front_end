import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

import type { IAuthContext, IDecodedToken } from '@/types';

import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from '@/helpers';

export const getDefaultAuthContext = (): IAuthContext => ({
  accessToken: getLocalStorageItem('token') ?? null,
  isLoading: true,
  user: null,
  setAccessToken: (access_token) => {
    setLocalStorageItem('token', access_token);
  },
  isAuthTokenExpired: function () {
    try {
      const decodedToken = jwtDecode<IDecodedToken>(this.accessToken as string);
      const isExpired = decodedToken.exp < Date.now() / 1000;
      if (isExpired) {
        toast.warn('User auth token is expired!');
      }
      return isExpired;
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
