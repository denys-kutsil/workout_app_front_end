import { combineReducers } from 'redux';

import status, { StatusStateType } from './status/reducers';
import workouts, { WorkoutsStateType } from './workouts/reducers';

export interface IRootState {
  workouts: WorkoutsStateType;
  status: StatusStateType;
}

const rootReducer = combineReducers({
  workouts,
  status,
});

export default rootReducer;
