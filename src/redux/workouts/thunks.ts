import { createAsyncThunk } from '@reduxjs/toolkit';

import getWorkoutDataService from '@/redux/workouts/service';

export const getWorkoutData = createAsyncThunk('workouts/getWorkoutData', async () => {
  const {
    data: { data },
  } = await getWorkoutDataService();
  return data;
});
