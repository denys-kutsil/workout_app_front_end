import React from 'react';
import type { ReactNode, FC } from 'react';

import { Box, CircularProgress } from '@mui/material';
import { Navigate } from 'react-router-dom';

import { styles } from './styles';

import { ClientRoutes } from '@/constants';
import { useAuthContext } from '@/context';

interface IAuthGateProps {
  children?: ReactNode;
  isPrivate: boolean;
}

const AuthGate: FC<IAuthGateProps> = ({ isPrivate, children }) => {
  const { user, isLoading } = useAuthContext();
  if (!user && isPrivate && !isLoading) {
    return <Navigate to={ClientRoutes.SignIn} />;
  }
  return (
    <>
      {isLoading && isPrivate ? (
        <Box sx={styles.progressContainer}>
          <CircularProgress />
        </Box>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default AuthGate;
