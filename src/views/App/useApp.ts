import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '@/redux';
import { checkAuth, userSelector } from '@/redux/user';
import { getWorkoutData } from '@/redux/workouts';

const useApp = () => {
  const { token } = useSelector(userSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getWorkoutData());
    if (token) {
      dispatch(checkAuth());
    }
  }, [dispatch]);
};

export default useApp;
