import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from '@/helpers';
import type { IAuthContext } from '@/types';

const getDefaultAuthContext = (): IAuthContext => {
  return {
    accessToken: getLocalStorageItem('accessToken') ?? null,
    isLoading: true,
    user: null,
    setAccessToken: function ({ access_token, user }) {
      setLocalStorageItem('accessToken', access_token);
      this.user = user;
    },
    logout: function () {
      removeLocalStorageItem('accessToken');
      this.accessToken = null;
      this.user = null;
    },
  };
};

export default getDefaultAuthContext;
