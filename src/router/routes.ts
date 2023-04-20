import { Routes } from '@/constants';
import { EmptyLayout, MainLayout } from '@/layouts';
import type { IRouterParams } from '@/router/types';
import { AuthView, CompleteView, TrackingView, WorkoutView } from '@/views';

const routes: IRouterParams[] = [
  {
    component: WorkoutView,
    layout: MainLayout,
    path: Routes.Workout,
    isPrivate: false,
  },
  {
    component: TrackingView,
    layout: EmptyLayout,
    path: Routes.Tracking,
    isPrivate: false,
  },
  {
    component: CompleteView,
    layout: EmptyLayout,
    path: Routes.Complete,
    isPrivate: false,
  },
  {
    component: AuthView,
    layout: EmptyLayout,
    path: Routes.SignIn,
    isPrivate: false,
  },
  {
    component: AuthView,
    layout: EmptyLayout,
    path: Routes.SignIn,
    isPrivate: false,
  },
];

export default routes;
