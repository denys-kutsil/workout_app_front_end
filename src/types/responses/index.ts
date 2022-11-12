import type { FormikErrors } from 'formik';

export interface IFormErrorResponse<FormValues> {
  message?: string;
  errors: FormikErrors<FormValues>;
}
export interface ISuccessResponse {
  message: string;
}

export * from './workout';
export * from './exercises';
export * from './questions';
export * from './user';
