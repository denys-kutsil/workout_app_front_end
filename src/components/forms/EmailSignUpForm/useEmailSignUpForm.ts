import { useDispatchFormikAction } from '@/hooks';
import { signUp } from '@/redux/user';
import { IAuthParams } from '@/types';

import type { FormikHelpers } from 'formik';

const useEmailSignUpForm = () => {
  const dispatchFormikAction = useDispatchFormikAction<IAuthParams>();

  const onSubmit = (params: IAuthParams, formik: FormikHelpers<IAuthParams>) => {
    const action = signUp(params);
    dispatchFormikAction(action, formik);
  };

  return { onSubmit };
};

export default useEmailSignUpForm;
