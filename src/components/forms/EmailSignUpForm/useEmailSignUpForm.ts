import { useSignUpMutation } from '@/apis/auth';
import { useToastMessageRequest } from '@/hooks';
import type { IAuthParams } from '@/types';

const useEmailSignUpForm = () => {
  const [signUp, signUpResponseParams] = useSignUpMutation();
  useToastMessageRequest(signUpResponseParams);

  const onSubmit = (params: IAuthParams) => {
    signUp(params);
  };

  return { onSubmit };
};

export default useEmailSignUpForm;
