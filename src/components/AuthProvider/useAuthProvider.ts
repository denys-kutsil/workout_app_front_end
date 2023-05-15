import { useEffect, useState } from 'react';

import type { IUserResponse } from '@/types';

import { useRefreshAuthTokenMutation } from '@/apis/auth';
import { useGetActiveUserMutation } from '@/apis/users';
import { getDefaultAuthContext } from '@/utils';

export const useAuthProvider = () => {
  const [authContext, setAuthContext] = useState(getDefaultAuthContext());

  const [refreshAuthToken, { data: refreshResponse }] = useRefreshAuthTokenMutation();
  const [getActiveUser, { data: user, isSuccess }] = useGetActiveUserMutation();

  const { accessToken, refreshToken } = authContext;

  useEffect(() => {
    const isExpired = authContext.isAuthTokenExpired();

    if (isExpired && refreshToken) {
      refreshAuthToken({ refreshToken });
      updateAuthContext({ isLoading: false });
    } else if (accessToken && !authContext.user) {
      getActiveUser();
    }
  }, [refreshToken]);

  useEffect(() => {
    if (refreshResponse) {
      authContext.setAccessTokens(refreshResponse.accessToken);
      getActiveUser();
    }
  }, [refreshResponse]);

  useEffect(() => {
    if (isSuccess && user) {
      setActiveUser(user);
    }
  }, [user, isSuccess]);

  const updateAuthContext = (params: Object) => {
    setAuthContext({ ...authContext, ...params });
  };

  const setActiveUser = (newUser: IUserResponse) => {
    updateAuthContext({ user: newUser, isLoading: false });
  };

  return { ...authContext, setActiveUser };
};
