import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ClientRoutes } from '@/constants';
import { statusSelector } from '@/redux/status';

const useCompleteView = () => {
  const navigate = useNavigate();
  const { minutes, seconds } = useSelector(statusSelector);

  const saveAndContinue = () => {
    navigate(ClientRoutes.Workout);
  };

  return {
    minutes,
    seconds,
    saveAndContinue,
  };
};

export default useCompleteView;
