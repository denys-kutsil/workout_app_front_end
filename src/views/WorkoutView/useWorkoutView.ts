import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { workoutsSelector } from '@/redux/workouts';
import { statusSelector } from '@/redux/status';

const useWorkoutView = () => {
  const history = useHistory();
  const { data } = useSelector(workoutsSelector);
  const { minutes, seconds } = useSelector(statusSelector);

  const goBack = () => {
    history.goBack();
  };

  const startWorkout = () => {
    history.push('/tracking');
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
