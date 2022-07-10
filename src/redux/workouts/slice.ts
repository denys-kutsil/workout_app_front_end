import { createSlice } from '@reduxjs/toolkit';

import { getWorkoutData } from '@/redux/workouts/thunks';
import { IWorkoutsStateType } from '@/redux/workouts/types';

const initialState = {
  data: [],
  exercises: [],
  active: null,
  activeIndex: 0,
};

export const workoutsSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    selectPrevExercise(state) {
      const index = state.activeIndex - 1;
      state.active = state.exercises[index];
      state.activeIndex = index;
    },
    selectNextExercise(state) {
      const index = state.activeIndex + 1;
      state.active = state.exercises[index];
      state.activeIndex = index;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWorkoutData.fulfilled, (state: IWorkoutsStateType, { payload }) => {
      const data = [...payload.questions];
      const exercises = data
        .map(({ exercises }) => exercises)
        .reduce((prev, next) => [...prev, ...next]);
      state.data = data;
      state.exercises = exercises;
      state.active = exercises[0];
    });
  },
});

export const { selectPrevExercise, selectNextExercise } = workoutsSlice.actions;

export default workoutsSlice.reducer;
