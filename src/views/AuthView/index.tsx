import { Box, Link as MuiLink } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { EmailSignUpForm, EmailSignInForm } from '@/components';

import styles from './styles';
import useAuthView from './useAuthView';

const AuthView = () => {
  const { url, linkText, isSignIn } = useAuthView();
  return (
    <Box sx={styles.container}>
      {isSignIn ? <EmailSignInForm /> : <EmailSignUpForm />}
      <Link to={url} style={styles.link}>
        <MuiLink
          href="#"
          component="button"
          color="primaryDark.300"
          variant="h6"
          sx={styles.muiLink}
        >
          {linkText}
        </MuiLink>
      </Link>
    </Box>
  );
};

export default AuthView;
