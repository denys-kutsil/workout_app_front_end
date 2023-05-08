import { combineReducers, compose, configureStore } from '@reduxjs/toolkit';

import type { IStatusStateType } from '@/redux/status';

import { exercisesApi, authApi, usersApi } from '@/apis';
import { statusReducer } from '@/redux/status';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  [exercisesApi.reducerPath]: exercisesApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  status: statusReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      exercisesApi.middleware,
      authApi.middleware,
      usersApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export interface IRootState {
  status: IStatusStateType;
} // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

export default store;
