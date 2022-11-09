import { combineReducers, compose, configureStore } from '@reduxjs/toolkit';

import { workoutsApi, authApi } from '@/apis';
import { statusReducer } from '@/redux/status';

import type { IStatusStateType } from '@/redux/status';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  [workoutsApi.reducerPath]: workoutsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  status: statusReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([workoutsApi.middleware, authApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export interface IRootState {
  status: IStatusStateType;
} // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

export default store;
