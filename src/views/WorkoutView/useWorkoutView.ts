import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { statusSelector } from '@/redux/status';
import { workoutsSelector } from '@/redux/workouts';

const useWorkoutView = () => {
  const navigate = useNavigate();
  const { data } = useSelector(workoutsSelector);
  const { minutes, seconds } = useSelector(statusSelector);

  const goBack = () => {
    navigate(-1);
  };

  const startWorkout = () => {
    navigate('/tracking');
  };

  return {
    seconds,
    history,
    minutes,
    data,
    goBack,
    startWorkout,
  };
};

export default useWorkoutView;
