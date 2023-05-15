import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import type { IAuthParams } from '@/types';

import { useSignInMutation } from '@/apis/auth';
import { ClientRoutes } from '@/constants';
import { useSetAuthTokens, useToastMessageRequest } from '@/hooks';

const useEmailSignInForm = () => {
  const navigation = useNavigate();
  const [signIn, signInResponseParams] = useSignInMutation();
  const { data: tokens, isSuccess } = signInResponseParams;
  const setAuthTokens = useSetAuthTokens();

  useToastMessageRequest(signInResponseParams);

  useEffect(() => {
    if (tokens && isSuccess) {
      setAuthTokens(tokens);
      navigation(ClientRoutes.Workout);
    }
  }, [tokens, isSuccess]);

  const onSubmit = (params: IAuthParams) => {
    signIn(params);
  };

  return { onSubmit };
};

export default useEmailSignInForm;
