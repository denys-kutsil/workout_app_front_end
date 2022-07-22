import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { statusActions } from '@/redux/status/slice';
import { workoutsActions } from '@/redux/workouts/slice';

const actions = {
  ...statusActions,
  ...workoutsActions,
};

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export default useActions;
