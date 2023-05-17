import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IUserResponse, IUserRequest } from '@/types';

import { ApiRoutes, HttpMethods } from '@/constants';
import { objToFormData, setAccessTokenToHeaders } from '@/helpers';
import { envUtil } from '@/utils';

const { api } = envUtil.getEnv();

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${api}/users`,
    prepareHeaders: (headers) => setAccessTokenToHeaders(headers),
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getActiveUser: builder.mutation<IUserResponse, void>({
      query: () => ({
        url: ApiRoutes.GetActive,
      }),
    }),
    updateUser: builder.mutation<IUserResponse, IUserRequest>({
      query: (body) => ({
        url: '/',
        method: HttpMethods.PUT,
        body: objToFormData(body),
      }),
    }),
  }),
});

export const { useGetActiveUserMutation, useUpdateUserMutation } = usersApi;
