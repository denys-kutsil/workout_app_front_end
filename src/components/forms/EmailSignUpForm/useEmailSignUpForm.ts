import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import type { IAuthParams, IAuthResponse } from '@/types';

import { useSignUpMutation } from '@/apis/auth';
import { ClientRoutes } from '@/constants';
import { useToastMessageRequest } from '@/hooks';

const useEmailSignUpForm = () => {
  const navigate = useNavigate();
  const [signUp, signUpResponseParams] = useSignUpMutation();
  const { isSuccess } = signUpResponseParams;

  useToastMessageRequest<IAuthResponse>(signUpResponseParams);

  useEffect(() => {
    if (isSuccess) {
      navigate(ClientRoutes.SignIn);
    }
  }, [isSuccess]);

  const onSubmit = (params: IAuthParams) => {
    signUp(params);
  };

  return { onSubmit };
};

export default useEmailSignUpForm;
