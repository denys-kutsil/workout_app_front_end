import { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useGetActiveUserMutation } from '@/apis/users';
import { ClientRoutes } from '@/constants';
import { useAuthContext } from '@/context';
import { useSetAuthTokens } from '@/hooks';

const GoogleAuthView = () => {
  const navigate = useNavigate();
  const { accessToken, refreshToken } = useParams();
  const authContext = useAuthContext();

  const [getActiveUser, { data: user, isSuccess }] = useGetActiveUserMutation();

  const setAuthTokens = useSetAuthTokens();

  useEffect(() => {
    if (accessToken && refreshToken) {
      setAuthTokens({ accessToken, refreshToken });
      getActiveUser();
    }
  }, [accessToken, refreshToken]);

  useEffect(() => {
    if (isSuccess && user) {
      authContext.setActiveUser(user);
      navigate(ClientRoutes.Workout);
    }
  }, [user, isSuccess]);

  return null;
};

export default GoogleAuthView;
