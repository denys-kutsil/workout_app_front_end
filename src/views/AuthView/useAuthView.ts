import { useEffect } from 'react';

import type { CredentialResponse } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';

import { useGoogleAuthMutation } from '@/apis/auth';
import { Routes } from '@/constants';
import { useAuthContext } from '@/context';
import { IGoogleAuthParams } from '@/types';

const useAuthView = () => {
  const navigate = useNavigate();
  const authContext = useAuthContext();
  const [googleAuth, { isSuccess, data }] = useGoogleAuthMutation();
  const { pathname } = useLocation();
  const isSignIn = pathname === Routes.SignIn;

  const url = isSignIn ? Routes.SignUp : Routes.SignIn;

  const linkText = isSignIn
    ? "Don't have an account? Sign Up"
    : 'Already have an account? Sign In ';

  useEffect(() => {
    if (isSuccess && data) {
      authContext.setActiveUser(data);
      navigate(Routes.Workout);
    }
  }, [isSuccess, data]);

  const onGoogleLoginSuccess = (credentialResponse: CredentialResponse) => {
    const { credential } = credentialResponse;
    if (credential) {
      const { email, picture }: IGoogleAuthParams = jwtDecode(credential);
      googleAuth({ email, picture });
    }
  };

  return { url, linkText, isSignIn, onGoogleLoginSuccess };
};

export default useAuthView;
