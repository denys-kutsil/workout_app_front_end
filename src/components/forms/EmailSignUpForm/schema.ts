import { object } from 'yup';

import { password, email } from '@/constants/validation';

export const schema = object({
  email,
  password,
}).required();
