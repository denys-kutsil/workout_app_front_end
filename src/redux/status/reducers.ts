import { AnyAction } from 'redux';
import actions from './actions';

export interface StatusStateType {
  duration: number;
  minutes: number;
  seconds: number;
}

const initialValue = {
  duration: 0,
  minutes: 0,
  seconds: 0,
};

const reducers = (state: StatusStateType = initialValue, action: AnyAction) => {
  const { type } = action;
  const duration = state.duration + action.duration;
  const minutes = Math.floor(duration / 60);
  const seconds = duration > 60 ? duration - minutes * 60 : duration;

  switch (type) {
    case actions.SET_DURATION:
      return {
        ...state,
        duration,
        minutes,
        seconds,
      };

    default:
      return state;
  }
};

export default reducers;
