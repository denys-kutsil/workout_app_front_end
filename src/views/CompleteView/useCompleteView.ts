import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { statusSelector } from '@/redux/status';

const useCompleteView = () => {
  const navigate = useNavigate();
  const { minutes, seconds } = useSelector(statusSelector);

  const saveAndContinue = () => {
    navigate('/');
  };

  return {
    minutes,
    seconds,
    saveAndContinue,
  };
};

export default useCompleteView;
