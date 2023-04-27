import { useEffect, useState } from 'react';

import { useGetActiveUserMutation } from '@/apis/auth';
import type { IAuthContext } from '@/types';
import { getDefaultAuthContext } from '@/utils';

export const useAuthProvider = () => {
  const [getActiveUser, { data: user, isSuccess }] = useGetActiveUserMutation();
  const [authContextValue, setNewAuthContextValue] = useState<IAuthContext>(
    getDefaultAuthContext(),
  );

  useEffect(() => {
    const isExpired = authContextValue.isAuthTokenExpired();
    if (!isExpired) {
      getActiveUser();
    }
  }, []);

  useEffect(() => {
    if (isSuccess && user) {
      setNewAuthContextValue({ ...authContextValue, user });
    }
  }, [user, isSuccess]);

  return authContextValue;
};
