import jwtDecode from 'jwt-decode';

import type { IAuthContext, IDecodedToken } from '@/types';

import { TokenTypes } from '@/constants';
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from '@/helpers';

export const getDefaultAuthContext = (): IAuthContext => ({
  accessToken: getLocalStorageItem(TokenTypes.AccessToken) ?? null,
  refreshToken: getLocalStorageItem(TokenTypes.RefreshToken) ?? null,
  isLoading: true,
  user: null,
  setAccessTokens: (token: string) => {
    setLocalStorageItem(TokenTypes.AccessToken, token);
  },
  setRefreshTokens: (token: string) => {
    setLocalStorageItem(TokenTypes.RefreshToken, token);
  },
  isAuthTokenExpired: function () {
    try {
      const decodedToken = jwtDecode<IDecodedToken>(this.accessToken as string);
      const expiresIn = decodedToken.exp - Date.now() / 1000;
      return expiresIn <= 0;
    } catch (error) {
      return true;
    }
  },
  setActiveUser: function (user) {
    this.user = user;
  },
  logout: function () {
    removeLocalStorageItem(TokenTypes.AccessToken);
    removeLocalStorageItem(TokenTypes.RefreshToken);
    this.accessToken = null;
    this.refreshToken = null;
    this.user = null;
  },
});
