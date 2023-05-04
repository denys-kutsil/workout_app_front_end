import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IAuthParams, IUserResponse, IAuthResponse } from '@/types';

import { ApiRoutes, HttpMethods } from '@/constants';
import { setAccessTokenToHeaders } from '@/helpers';
import { envUtil } from '@/utils';

const { api } = envUtil.getEnv();

console.log(api);

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${api}/auth`,
    prepareHeaders: (headers) => setAccessTokenToHeaders(headers),
  }),
  tagTypes: ['Workouts'],
  endpoints: (builder) => ({
    signIn: builder.mutation<IAuthResponse, IAuthParams>({
      query: (body) => ({
        url: ApiRoutes.SignIn,
        body,
        method: HttpMethods.POST,
      }),
    }),
    signUp: builder.mutation<IAuthResponse, IAuthParams>({
      query: (body) => ({
        url: ApiRoutes.SignUp,
        body,
        method: HttpMethods.POST,
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
