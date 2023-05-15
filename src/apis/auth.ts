import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  IAccessTokenResponse,
  IAuthParams,
  IAuthResponse,
  IRefreshTokenResponse,
} from '@/types';

import { ApiRoutes, HttpMethods } from '@/constants';
import { setAccessTokenToHeaders } from '@/helpers';
import { envUtil } from '@/utils';

const { api } = envUtil.getEnv();

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
    refreshAuthToken: builder.mutation<IAccessTokenResponse, IRefreshTokenResponse>({
      query: (body) => ({
        url: ApiRoutes.RefreshToken,
        body,
        method: HttpMethods.POST,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useRefreshAuthTokenMutation } = authApi;
