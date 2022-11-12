import { useLocation } from 'react-router-dom';

import { ROUTES_ENUM } from '@/constants';

const useAuthView = () => {
  const { pathname } = useLocation();
  const isSignIn = pathname === ROUTES_ENUM.SIGN_IN;

  const url = isSignIn ? ROUTES_ENUM.SIGN_UP : ROUTES_ENUM.SIGN_IN;
  const linkText = isSignIn
    ? "Don't have an account? Sign Up"
    : 'Already have an account? Sign In ';

  return { url, linkText, isSignIn };
};

export default useAuthView;
