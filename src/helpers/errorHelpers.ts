import { IResponseHttpError } from '@/types';

const getErrorMessage = (error: IResponseHttpError) => {
  let message = 'Something went wrong!';
  if (error?.data?.message) {
    message = error.data.message;
  } else if (error?.data?.error) {
    message = error.data.error;
  } else if (typeof error === 'string') {
    message = error;
  }
  return message;
};

export { getErrorMessage };
