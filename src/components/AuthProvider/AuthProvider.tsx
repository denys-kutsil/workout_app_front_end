import React from 'react';

import { useAuthProvider } from './useAuthProvider';

import { AuthContextProvider } from '@/context/auth';

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const authContext = useAuthProvider();
  return <AuthContextProvider value={authContext}>{children}</AuthContextProvider>;
};

export default AuthProvider;
