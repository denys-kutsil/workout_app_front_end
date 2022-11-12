import { createContext, useContext } from 'react';

import { getDefaultAuthContext } from '@/utils';

import type { IAuthContext } from '@/types';

export const AuthContext = createContext<IAuthContext>(getDefaultAuthContext());

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = AuthContext.Provider;
