import { useLocation } from 'react-router-dom';

import { ApiRoutes, ClientRoutes } from '@/constants';
import { openExternalUrl } from '@/utils';

const useAuthView = () => {
  const { pathname } = useLocation();
  const isSignIn = pathname === ClientRoutes.SignIn;

  const url = isSignIn ? ClientRoutes.SignUp : ClientRoutes.SignIn;

  const linkText = isSignIn
    ? "Don't have an account? Sign Up"
    : 'Already have an account? Sign In ';

  const onGoogleAuth = () => {
    openExternalUrl(ApiRoutes.GoogleAuth, true);
  };

  return { url, linkText, isSignIn, onGoogleAuth };
};

export default useAuthView;
