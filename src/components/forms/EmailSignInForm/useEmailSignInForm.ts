import { useSignInMutation } from '@/apis/auth';
import { IAuthParams } from '@/types';

const useEmailSignInForm = () => {
  const [signIn] = useSignInMutation();
  const onSubmit = (params: IAuthParams) => {
    signIn(params);
  };

  return { onSubmit };
};

export default useEmailSignInForm;
