import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { statusDurationSelector } from '@/redux/status/selectors';

const useCompleteView = () => {
  const history = useHistory();
  const statusDuration = useSelector(statusDurationSelector);

  const minutes = Math.floor(statusDuration / 60);
  const seconds = statusDuration > 60 ? statusDuration - minutes * 60 : statusDuration;

  const saveAndContinue = () => {
    history.push('/');
  };
  return {
    minutes,
    seconds,
    saveAndContinue,
  };
};

export default useCompleteView;
