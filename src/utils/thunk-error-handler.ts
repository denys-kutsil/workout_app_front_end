import axios from 'axios';
import { toast } from 'react-toastify';

import type { AsyncThunkPayloadCreator } from '@reduxjs/toolkit';

interface IHandleThunkApiErrorOptions {
  // Should the toast with error message be shown in case response was not successful
  showToast?: boolean;
}

type ThunkApi<Action, Response> = Parameters<AsyncThunkPayloadCreator<Response, Action>>[1];

interface ErrorType {
  response?: {
    data: {
      message: string;
    };
  };
}

const handleShowToast = <E extends ErrorType>(e: E, options?: IHandleThunkApiErrorOptions) => {
  if (!options?.showToast) {
    return;
  }
  if (axios.isAxiosError(e) && e?.response?.data?.message) {
    toast.error(e.response.data.message);
  } else if (e instanceof Error && e.message) {
    toast.error(e.message);
  }
};

export const handleThunkApiError = <Action, Response>(
  service: (action: Action, thunkAPI?: ThunkApi<Response, Action>) => Promise<Response>,
  options?: IHandleThunkApiErrorOptions,
) => {
  return async (action: Action, thunkAPI: ThunkApi<Response, Action>) => {
    try {
      return await service(action, thunkAPI);
    } catch (e) {
      handleShowToast(e as ErrorType, options);

      if (axios.isAxiosError(e)) {
        throw thunkAPI.rejectWithValue(e?.response?.data);
      }

      throw e;
    }
  };
};
