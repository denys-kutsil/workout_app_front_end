import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiRoutes } from '@/constants';
import { setAccessTokenToHeaders } from '@/helpers';
import type { IAuthParams, IWorkoutResponse, IUserResponse } from '@/types';
import { envUtil } from '@/utils';

const { api, api_token } = envUtil.getEnv();

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${api}/auth`,
    prepareHeaders: (headers) => setAccessTokenToHeaders(headers),
  }),
  tagTypes: ['Workouts'],
  endpoints: (builder) => ({
    signIn: builder.mutation<IWorkoutResponse, IAuthParams>({
      query: () => ({
        url: ApiRoutes.SignIn,
        params: { api_token },
      }),
    }),
    signUp: builder.mutation<IWorkoutResponse, IAuthParams>({
      query: (params) => ({
        url: ApiRoutes.SignUp,
        params,
      }),
    }),
    getActiveUser: builder.mutation<IUserResponse, void>({
      query: () => ({
        url: ApiRoutes.GetActive,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useGetActiveUserMutation } = authApi;
