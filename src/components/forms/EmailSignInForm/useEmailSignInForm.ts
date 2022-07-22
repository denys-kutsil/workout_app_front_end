import { useDispatchFormikAction } from '@/hooks';
import { signIn } from '@/redux/user';
import { IAuthParams } from '@/types';

import type { FormikHelpers } from 'formik';

const useEmailSignInForm = () => {
  const dispatchFormikAction = useDispatchFormikAction<IAuthParams>();

  const onSubmit = (params: IAuthParams, formik: FormikHelpers<IAuthParams>) => {
    const action = signIn(params);
    dispatchFormikAction(action, formik);
  };

  return { onSubmit };
};

export default useEmailSignInForm;
