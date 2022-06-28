import { combineReducers } from "redux";
import workouts, { WorkoutsStateType } from "./workouts/reducers";
import status, { StatusStateType } from "./status/reducers";

export interface IRootState {
  workouts: WorkoutsStateType;
  status: StatusStateType;
}

const rootReducer = combineReducers({
  workouts,
  status,
});

export default rootReducer;
