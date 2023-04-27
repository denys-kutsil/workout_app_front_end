import React from 'react';

import { Box, Link as MuiLink } from '@mui/material';
import GoogleButton from 'react-google-button';
import { Link } from 'react-router-dom';

import styles from './styles';
import useAuthView from './useAuthView';

import { EmailSignUpForm, EmailSignInForm } from '@/components';

const AuthView = () => {
  const { url, linkText, isSignIn, onGoogleAuth } = useAuthView();

  return (
    <Box sx={styles.container}>
      {isSignIn ? <EmailSignInForm /> : <EmailSignUpForm />}
      <Box mt={3}>
        <GoogleButton type="light" onClick={onGoogleAuth} />
      </Box>
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
