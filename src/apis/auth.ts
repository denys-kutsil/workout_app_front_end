import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { setAccessTokenToHeaders } from '@/helpers';
import type {
  IAuthParams,
  IWorkoutResponse,
  IGoogleAuthParams,
  IUserResponse,
  ISignInResponse,
} from '@/types';
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
    googleAuth: builder.mutation<ISignInResponse, IGoogleAuthParams>({
      query: (body) => ({
        url: '/auth/google',
        body,
        method: 'POST',
      }),
    }),
    getActiveUser: builder.mutation<IUserResponse, void>({
      query: () => ({
        url: '/get-active',
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useGoogleAuthMutation,
  useGetActiveUserMutation,
} = authApi;
