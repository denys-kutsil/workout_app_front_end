import { AnyAction } from "redux";
import actions from "./actions";
import { WorkoutDataType } from "./types";

export interface WorkoutsStateType {
  data: WorkoutDataType[];
}

const reducers = (
  state: WorkoutsStateType = { data: [] },
  action: AnyAction
) => {
  switch (action.type) {
    case actions.SET_WORKOUT_DATA:
      return {
        data: [...action.data],
      };
    default:
      return state;
  }
};

export default reducers;
