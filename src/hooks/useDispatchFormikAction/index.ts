import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { IFormErrorResponse, ISuccessResponse } from '@/types';

import type { IFormikActionOptions } from './types';
import type { AppDispatch } from '@/redux';
import type { AsyncThunkAction } from '@reduxjs/toolkit';
import type { FormikHelpers } from 'formik';

const isFromErrorResponse = <T>(e: unknown): e is IFormErrorResponse<T> => {
  const errors = (e as IFormErrorResponse<T>)?.errors;
  return typeof errors === 'object' && Object.keys(errors).length > 0;
};

const useDispatchFormikAction = <T extends {}>() => {
  const dispatch = useDispatch<AppDispatch>();

  const func = useCallback(
    async <TResult = unknown>(
      action: AsyncThunkAction<TResult, Partial<Record<keyof T, unknown>>, {}>,
      { setErrors, resetForm }: FormikHelpers<T>,
      options?: IFormikActionOptions,
    ) => {
      try {
        const data = await dispatch(action).unwrap();

        const successResponse = data as unknown as ISuccessResponse;

        if (successResponse?.message && options?.showToastSuccess) {
          toast.success(successResponse.message);
        }
        if (options?.resetFormOnSuccess) {
          resetForm();
        }
        return data;
      } catch (e) {
        if (e instanceof Error && e.message) {
          toast.error(e.message);
        } else if (isFromErrorResponse<T>(e)) {
          setErrors(e.errors);
        } else {
          console.log(e);
        }
        throw e;
      }
    },
    [dispatch],
  );

  return func;
};

export default useDispatchFormikAction;
