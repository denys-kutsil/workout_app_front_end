import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import type { ActionCreatorsMapObject } from '@reduxjs/toolkit';

const useActions = <T>(actions: ActionCreatorsMapObject<T>) => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export default useActions;
