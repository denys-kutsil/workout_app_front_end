import { useEffect } from 'react';

import { toast } from 'react-toastify';

import type { IResponseWithMessage } from '@/types';

interface IUseToastMessageRequestProps<T extends IResponseWithMessage> {
  data?: T;
  isSuccess: boolean;
  isError: boolean;
}

const useToastMessageRequest = <T extends IResponseWithMessage>({
  isSuccess,
  isError,
  data,
}: IUseToastMessageRequestProps<T>) => {
  useEffect(() => {
    if (data) {
      const { message } = data;
      if (isError) toast.error(message);
      if (isSuccess) toast.success(message);
    }
  }, [isSuccess, isError, data]);
};

export default useToastMessageRequest;
