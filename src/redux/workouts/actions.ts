import { WorkoutDataType } from './types';

const actions = {
  GET_WORKOUT_DATA: 'workouts/GET_WORKOUT_DATA',
  SET_WORKOUT_DATA: 'workouts/SET_WORKOUT_DATA',
  SELECT_NEXT_EXERCISE: 'workouts/SELECT_NEXT_EXERCISE',
  SELECT_PREV_EXERCISE: 'workouts/SELECT_PREV_EXERCISE',
};

export const selectNextExercise = () => {
  return {
    type: actions.SELECT_NEXT_EXERCISE,
  };
};

export const selectPrevExercise = () => {
  return {
    type: actions.SELECT_PREV_EXERCISE,
  };
};

export const getWorkoutData = () => {
  return {
    type: actions.GET_WORKOUT_DATA,
  };
};

export const setWorkoutData = (data: WorkoutDataType[]) => {
  return {
    type: actions.SET_WORKOUT_DATA,
    data,
  };
};

export default actions;
