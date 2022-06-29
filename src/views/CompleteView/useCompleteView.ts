import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootState } from '@/redux/reducers';

const useCompleteView = () => {
  const history = useHistory();
  const { duration } = useSelector((state: IRootState) => state.status);
  const minutes = Math.floor(duration / 60);
  const seconds = duration > 60 ? duration - minutes * 60 : duration;
  return {
    minutes,
    seconds,
    history,
  };
};

export default useCompleteView;
