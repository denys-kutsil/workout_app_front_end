import { createAsyncThunk } from '@reduxjs/toolkit';

import { authorizationService } from '@/services';
import { handleThunkApiError } from '@/utils';

export const signUp = createAsyncThunk(
  'user/signUp',
  handleThunkApiError(authorizationService.signUp, { showToast: true }),
);
