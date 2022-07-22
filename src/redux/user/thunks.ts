import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { authorizationService } from '@/services';
import { IAuthParams, IAuthResponse } from '@/types';
import { handleThunkApiError } from '@/utils';

export const signUp = createAsyncThunk(
  'user/signUp',
  handleThunkApiError(
    async (params: IAuthParams) => {
      const response = await authorizationService.signUp(params);
      toast.success('User was created successfully!');
      return response;
    },
    { showToast: true },
  ),
);

export const signIn = createAsyncThunk<IAuthResponse, IAuthParams>(
  'user/signIn',
  handleThunkApiError(
    async (params: IAuthParams) => {
      const response = await authorizationService.signIn(params);
      toast.success('Authorization was success!');
      return response;
    },
    { showToast: true },
  ),
);

export const checkAuth = createAsyncThunk<IAuthResponse, void>(
  'user/checkAuth',
  handleThunkApiError(authorizationService.checkAuth),
);
