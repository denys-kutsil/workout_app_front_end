import { createContext, useContext } from 'react';

import type { IAuthContext } from '@/types';

import { getDefaultAuthContext } from '@/utils';

export const AuthContext = createContext<IAuthContext>(getDefaultAuthContext());

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = AuthContext.Provider;
