import { useSearchParams } from 'react-router-dom';

const useAuthView = () => {
  const [params] = useSearchParams();
  const isSignIn = params.get('variant') === 'sign-in';
  const url = isSignIn ? '/auth' : '/auth?variant=sign-in';
  const linkText = isSignIn
    ? "Don't have an account? Sign Up"
    : 'Already have an account? Sign In ';

  return { url, linkText, isSignIn };
};

export default useAuthView;
