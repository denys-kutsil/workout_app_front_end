import { api } from '@/services';

import type { IAuthParams } from '@/types';

const signUp = async (params: IAuthParams) => {
  const { data } = await api.post('/auth/sign-up', params);
  return data;
};

const signIn = async (params: IAuthParams) => {
  const { data } = await api.post(`/auth/sign-in`, params);
  return data;
};

const checkAuth = async () => {
  const { data } = await api.get('/auth/refresh');
  return data;
};

export default { signUp, signIn, checkAuth };
