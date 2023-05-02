import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiRoutes } from '@/constants';
import { setAccessTokenToHeaders } from '@/helpers';
import type { IGetAllExercisesResponse, IGetExerciseByIdResponse } from '@/types';
import { envUtil } from '@/utils';

const { api } = envUtil.getEnv();

export const exercisesApi = createApi({
  reducerPath: 'exercisesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    prepareHeaders: (headers) => setAccessTokenToHeaders(headers),
  }),
  tagTypes: ['Exercises'],
  endpoints: (builder) => ({
    getExercisesData: builder.query<IGetAllExercisesResponse, void>({
      query: () => ({
        url: ApiRoutes.GetExercises,
      }),
    }),
    getExerciseById: builder.query<IGetExerciseByIdResponse, string>({
      query: (id) => ({
        url: ApiRoutes.GetExercises + '/' + id,
      }),
    }),
  }),
});

export const { useGetExercisesDataQuery, useGetExerciseByIdQuery } = exercisesApi;
