import { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useGetActiveUserMutation } from '@/apis/auth';
import { ClientRoutes } from '@/constants';
import { useAuthContext } from '@/context';

const GoogleAuthView = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const authContext = useAuthContext();
  const [getActiveUser, { data: user, isSuccess }] = useGetActiveUserMutation();

  useEffect(() => {
    if (token) {
      authContext.setAccessToken(token);
      getActiveUser();
    }
  }, [token]);

  useEffect(() => {
    if (isSuccess && user) {
      authContext.setActiveUser(user);
      navigate(ClientRoutes.Workout);
    }
  }, [user, isSuccess]);

  return null;
};

export default GoogleAuthView;
