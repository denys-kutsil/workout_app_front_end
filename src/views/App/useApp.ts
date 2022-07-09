import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getWorkoutData } from '@/redux/workouts';

const useApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkoutData());
  }, [dispatch]);
};

export default useApp;
