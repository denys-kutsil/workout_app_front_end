import { useEffect } from 'react';

import type { IUserRequest } from '@/types';

import { useUpdateUserMutation } from '@/apis/users';
import { useAuthContext } from '@/context';

const useUserForm = () => {
  const [updateUser, { data: newUser, isLoading }] = useUpdateUserMutation();
  const { user, setActiveUser } = useAuthContext();

  const initialValues: IUserRequest = {
    picture: user?.picture ?? '',
  };

  useEffect(() => {
    if (newUser) {
      setActiveUser(newUser);
    }
  }, [newUser]);

  const onSubmit = (params: IUserRequest) => {
    updateUser(params);
  };

  return { initialValues, isLoading, onSubmit };
};

export default useUserForm;
