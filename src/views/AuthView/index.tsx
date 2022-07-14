import { Box } from '@mui/material';
import React from 'react';

import { EmailSignUpForm } from '@/components';

import styles from './styles';

const AuthView = () => {
  return (
    <Box sx={styles.container}>
      <EmailSignUpForm />
    </Box>
  );
};

export default AuthView;
