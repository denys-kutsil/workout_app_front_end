import { AnyAction } from 'redux';
import actions from './actions';
import { ExerciseType, WorkoutDataType } from './types';

export interface WorkoutsStateType {
  data: WorkoutDataType[];
  exercises: ExerciseType[];
  active: ExerciseType | null;
  activeIndex: number;
}

const initialState = {
  data: [],
  exercises: [],
  active: null,
  activeIndex: 0,
};

const reducers = (state: WorkoutsStateType = initialState, action: AnyAction) => {
  switch (action.type) {
    case actions.SET_WORKOUT_DATA: {
      const data = [...action.data];
      const exercises = data
        .map(({ exercises }) => exercises)
        .reduce((prev, next) => [...prev, ...next]);
      return {
        ...state,
        data,
        exercises: exercises,
        active: exercises[0],
      };
    }

    case actions.SELECT_NEXT_EXERCISE: {
      const index = state.activeIndex + 1;
      return {
        ...state,
        active: state.exercises[index],
        activeIndex: index,
      };
    }

    case actions.SELECT_PREV_EXERCISE: {
      const index = state.activeIndex - 1;
      return {
        ...state,
        active: state.exercises[index],
        activeIndex: index,
      };
    }

    default:
      return state;
  }
};

export default reducers;
