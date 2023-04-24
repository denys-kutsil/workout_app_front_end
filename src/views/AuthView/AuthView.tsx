import React from 'react';

import { Box, Link as MuiLink } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';

import styles from './styles';
import useAuthView from './useAuthView';

import { EmailSignUpForm, EmailSignInForm } from '@/components';

const AuthView = () => {
  const { url, linkText, isSignIn, onGoogleLoginSuccess } = useAuthView();

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
      <GoogleLogin onSuccess={onGoogleLoginSuccess} />
    </Box>
  );
};

export default AuthView;
