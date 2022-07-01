import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { statusSelector } from '@/redux/status';

const useCompleteView = () => {
  const history = useHistory();
  const { minutes, seconds } = useSelector(statusSelector);

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
