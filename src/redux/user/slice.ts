import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { checkAuth, signIn } from '@/redux/user/thunks';

const initialState = {
  token: localStorage.getItem('access-token') || null,
  info: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(signIn.fulfilled, checkAuth.fulfilled), (state, { payload }) => {
      const { accessToken, user } = payload;
      state.info = user;
      localStorage.setItem('access-token', accessToken);
      state.token = accessToken;
    });
  },
});

export default userSlice.reducer;
