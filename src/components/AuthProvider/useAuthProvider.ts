import { useEffect, useState } from 'react';

import type { IUserResponse } from '@/types';

import { useGetActiveUserMutation } from '@/apis/users';
import { getDefaultAuthContext } from '@/utils';

export const useAuthProvider = () => {
  const [getActiveUser, { data: user, isSuccess }] = useGetActiveUserMutation();
  const [authContext, setAuthContext] = useState(getDefaultAuthContext());

  useEffect(() => {
    const isExpired = authContext.isAuthTokenExpired();
    if (isExpired) {
      updateAuthContext({ isLoading: false });
    } else {
      getActiveUser();
    }
  }, []);

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
