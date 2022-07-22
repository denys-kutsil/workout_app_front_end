import { compose, configureStore } from '@reduxjs/toolkit';

import { IStatusStateType, statusReducer } from '@/redux/status';
import { IUserStateType, userReducer } from '@/redux/user';
import { IWorkoutsStateType, workoutsReducer } from '@/redux/workouts';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const store = configureStore({
  reducer: {
    workouts: workoutsReducer,
    status: statusReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export interface IRootState {
  workouts: IWorkoutsStateType;
  status: IStatusStateType;
  user: IUserStateType;
} // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
