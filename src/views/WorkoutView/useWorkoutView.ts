import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useGetWorkoutsDataQuery } from '@/apis/workouts';
import { ClientRoutes } from '@/constants';
import { statusSelector } from '@/redux/status';

const useWorkoutView = () => {
  const navigate = useNavigate();

  const { data: workout } = useGetWorkoutsDataQuery();
  const questions = workout?.data?.questions;
  const { minutes, seconds } = useSelector(statusSelector);

  const goBack = () => {
    navigate(-1);
  };

  const startWorkout = () => {
    navigate(ClientRoutes.Tracking);
  };

  return {
    seconds,
    history,
    minutes,
    questions,
    goBack,
    startWorkout,
  };
};

export default useWorkoutView;
