import axios from 'axios';

import { envUtil } from '@/utils';

import type { IAuthParams } from '@/types';
const { backend_url } = envUtil.getEnv();

const signUp = async (params: IAuthParams) => {
  const { data } = await axios.post(`${backend_url}/auth/sign-up`, params);
  return data;
};

const signIn = async (params: IAuthParams) => {
  const { data } = await axios.post(`${backend_url}/auth/sign-in`, params);
  return data;
};

export default { signUp, signIn };
