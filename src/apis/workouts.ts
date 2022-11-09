import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IWorkoutResponse } from '@/types';
import { setAccessTokenToHeaders, envUtil } from '@/utils';

const { workoutApi, api_token } = envUtil.getEnv();

export const workoutsApi = createApi({
  reducerPath: 'workoutsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: workoutApi,
    prepareHeaders: (headers) => setAccessTokenToHeaders(headers),
  }),
  tagTypes: ['Workouts'],
  endpoints: (builder) => ({
    getWorkoutsData: builder.query<IWorkoutResponse, void>({
      query: () => ({
        url: 'api/quizzes/workouts',
        params: { api_token },
      }),
    }),
  }),
});

export const { useGetWorkoutsDataQuery } = workoutsApi;
