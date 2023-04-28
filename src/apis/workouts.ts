import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiRoutes } from '@/constants';
import { setAccessTokenToHeaders } from '@/helpers';
import type { IWorkoutResponse } from '@/types';
import { envUtil } from '@/utils';

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
        url: ApiRoutes.GetWorkoutsData,
        params: { api_token },
      }),
    }),
  }),
});

export const { useGetWorkoutsDataQuery } = workoutsApi;
