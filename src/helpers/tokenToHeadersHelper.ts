import { getLocalStorageItem } from '@/helpers';

export const setAccessTokenToHeaders = (headers: Headers) => {
  const token = typeof localStorage !== 'undefined' && getLocalStorageItem('access_token');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return headers;
};
