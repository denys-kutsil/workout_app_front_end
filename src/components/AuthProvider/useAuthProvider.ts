import { useEffect, useState } from 'react';

import { useGetActiveUserMutation } from '@/apis/auth';
import type { IAuthContext } from '@/types';
import { getDefaultAuthContext } from '@/utils';

export const useAuthProvider = () => {
  const [getActiveUser, { data: user, isSuccess }] = useGetActiveUserMutation();
  const [authContext, setNewAuthContext] = useState<IAuthContext>(getDefaultAuthContext());

  useEffect(() => {
    const isExpired = authContext.isAuthTokenExpired();
    if (!isExpired) {
      getActiveUser();
    }
  }, []);

  useEffect(() => {
    if (isSuccess && user) {
      setNewAuthContext({ ...authContext, user });
    }
  }, [user, isSuccess]);

  return authContext;
};
