import { useLocation } from 'react-router-dom';

import { Routes } from '@/constants';

const useAuthView = () => {
  const { pathname } = useLocation();
  const isSignIn = pathname === Routes.SignIn;

  const url = isSignIn ? Routes.SignUp : Routes.SignIn;

  const linkText = isSignIn
    ? "Don't have an account? Sign Up"
    : 'Already have an account? Sign In ';

  return { url, linkText, isSignIn };
};

export default useAuthView;
