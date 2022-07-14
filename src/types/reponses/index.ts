import type { FormikErrors } from 'formik';

export interface IFormErrorResponse<FormValues> {
  message?: string;
  errors: FormikErrors<FormValues>;
}
export interface ISuccessResponse {
  message: string;
}
