import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/redux';
import { getWorkoutData } from '@/redux/workouts';

const useApp = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getWorkoutData());
  }, [dispatch]);
};

export default useApp;
