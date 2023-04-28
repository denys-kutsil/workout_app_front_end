import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useSignInMutation } from '@/apis/auth';
import { ClientRoutes } from '@/constants';
import { useAuthContext } from '@/context';
import { useToastMessageRequest } from '@/hooks';
import type { IAuthParams } from '@/types';

const useEmailSignInForm = () => {
  const navigation = useNavigate();
  const authContext = useAuthContext();
  const [signIn, signInResponseParams] = useSignInMutation();
  const { data, isSuccess } = signInResponseParams;

  useToastMessageRequest(signInResponseParams);

  useEffect(() => {
    if (data && isSuccess) {
      const { token } = data;
      authContext.setAccessToken(token);
      navigation(ClientRoutes.Workout);
    }
  }, [data, isSuccess]);

  const onSubmit = (params: IAuthParams) => {
    signIn(params);
  };

  return { onSubmit };
};

export default useEmailSignInForm;
