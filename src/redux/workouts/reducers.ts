import { AnyAction } from 'redux';
import actions from './actions';
import { WorkoutDataType } from './types';

export interface WorkoutsStateType {
  data: WorkoutDataType[];
  active: WorkoutDataType | null;
}

const reducers = (state: WorkoutsStateType = { data: [], active: null }, action: AnyAction) => {
  switch (action.type) {
    case actions.SET_WORKOUT_DATA:
      return {
        data: [...action.data],
        active: action.data[0],
      };
    default:
      return state;
  }
};

export default reducers;
