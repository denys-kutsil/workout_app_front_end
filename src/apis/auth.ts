import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IAuthParams, IWorkoutResponse } from '@/types';
import { envUtil } from '@/utils';

const { api, api_token } = envUtil.getEnv();

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${api}/auth`,
  }),
  tagTypes: ['Workouts'],
  endpoints: (builder) => ({
    signIn: builder.mutation<IWorkoutResponse, IAuthParams>({
      query: () => ({
        url: '/sign-in',
        params: { api_token },
      }),
    }),
    signUp: builder.mutation<IWorkoutResponse, IAuthParams>({
      query: (params) => ({
        url: '/sign-up',
        params,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
