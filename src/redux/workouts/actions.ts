import { WorkoutDataType } from "./types";

const actions = {
	GET_WORKOUT_DATA: 'workouts/GET_WORKOUT_DATA',
	SET_WORKOUT_DATA: 'workouts/SET_WORKOUT_DATA'
};

export const getWorkoutData = () => {
	return {
		type: actions.GET_WORKOUT_DATA,
	}
};

export const setWorkoutData = (data: WorkoutDataType[]) => {
	return {
		type: actions.SET_WORKOUT_DATA,
		data
	}
};

export default actions;