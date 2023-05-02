import { createSlice } from '@reduxjs/toolkit';

import type { IStatusStateType } from './types';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  duration: 0,
  minutes: 0,
  seconds: 0,
};

export const statusSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    setTotalDuration(state: IStatusStateType, action: PayloadAction<number>) {
      const duration = state.duration + action.payload;
      const minutes = Math.floor(duration / 60);
      const seconds = duration > 60 ? duration - minutes * 60 : duration;
      state.duration = duration;
      state.minutes = minutes;
      state.seconds = seconds;
    },
  },
});

export const statusActions = statusSlice.actions;

export default statusSlice.reducer;
