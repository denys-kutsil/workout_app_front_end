import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getWorkoutData } from '@/redux/workouts/actions';

const useApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkoutData());
  }, [dispatch]);
};

export default useApp;
