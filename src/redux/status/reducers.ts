import { AnyAction } from 'redux';
import actions from './actions';

export interface StatusStateType {
  duration: number;
}

const initialValue = {
  duration: 0,
};

const reducers = (state: StatusStateType = initialValue, action: AnyAction) => {
  const { type, duration } = action;
  switch (type) {
    case actions.SET_DURATION:
      return {
        ...state,
        duration: state.duration + duration,
      };

    default:
      return state;
  }
};

export default reducers;
