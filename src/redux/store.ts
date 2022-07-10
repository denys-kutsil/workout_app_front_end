import { configureStore } from '@reduxjs/toolkit';

import { statusReducer, IStatusStateType } from '@/redux/status';
import { IWorkoutsStateType, workoutsReducer } from '@/redux/workouts';

const store = configureStore({
  reducer: {
    workouts: workoutsReducer,
    status: statusReducer,
  },
});

export interface IRootState {
  workouts: IWorkoutsStateType;
  status: IStatusStateType;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
