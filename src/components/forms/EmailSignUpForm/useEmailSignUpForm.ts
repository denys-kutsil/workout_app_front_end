import { useSignUpMutation } from '@/apis/auth';
import { IAuthParams } from '@/types';

const useEmailSignUpForm = () => {
  const [signUp] = useSignUpMutation();

  const onSubmit = (params: IAuthParams) => {
    signUp(params);
  };

  return { onSubmit };
};

export default useEmailSignUpForm;
