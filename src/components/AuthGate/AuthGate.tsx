import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from '@/context';

import { styles } from './styles';

interface IAuthGateProps {
  children: React.ReactNode;
  isPrivate: boolean;
}

const AuthGate: React.FC<IAuthGateProps> = ({ isPrivate, children }) => {
  const { user, isLoading } = useAuthContext();
  if (!user && isPrivate && !isLoading) {
    return <Navigate to="/sign-in" />;
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
