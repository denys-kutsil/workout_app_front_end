import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { workoutDataSelector } from '@/redux/workouts/selectors';
import { statusDurationSelector } from '@/redux/status/selectors';

const useWorkoutView = () => {
  const history = useHistory();
  const workoutData = useSelector(workoutDataSelector);
  const statusDuration = useSelector(statusDurationSelector);

  const minutes = Math.floor(statusDuration / 60);
  const seconds = statusDuration > 60 ? statusDuration - minutes * 60 : statusDuration;

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
    workoutData,
    goBack,
    startWorkout,
  };
};

export default useWorkoutView;
