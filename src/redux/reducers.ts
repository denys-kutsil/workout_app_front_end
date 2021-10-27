import { combineReducers } from "redux";
import workouts, { WorkoutsStateType } from "./workouts/reducers";

export interface IRootState {
		workouts: WorkoutsStateType
}

const rootReducer = combineReducers({
	workouts
});

export default rootReducer;