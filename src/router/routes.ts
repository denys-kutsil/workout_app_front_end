import { lazy } from 'react';

import type { IRouterParams } from '@/router/types';

import { ClientRoutes } from '@/constants';
import { EmptyLayout, MainLayout } from '@/layouts';

const ProfileView = lazy(() => import('@/views/ProfileView'));
const GoogleAuthView = lazy(() => import('@/views/GoogleAuthView'));
const WorkoutView = lazy(() => import('@/views/WorkoutView'));
const TrackingView = lazy(() => import('@/views/TrackingView'));
const AuthView = lazy(() => import('@/views/AuthView'));
const CompleteView = lazy(() => import('@/views/CompleteView'));

const routes: IRouterParams[] = [
  {
    component: GoogleAuthView,
    layout: EmptyLayout,
    path: ClientRoutes.GoogleAuth,
    isPrivate: false,
  },
  {
    component: ProfileView,
    layout: MainLayout,
    path: ClientRoutes.Profile,
    isPrivate: true,
  },
  {
    component: WorkoutView,
    layout: MainLayout,
    path: ClientRoutes.Workout,
    isPrivate: false,
  },
  {
    component: TrackingView,
    layout: EmptyLayout,
    path: ClientRoutes.TrackingById,
    isPrivate: false,
  },
  {
    component: CompleteView,
    layout: EmptyLayout,
    path: ClientRoutes.Complete,
    isPrivate: false,
  },
  {
    component: AuthView,
    layout: EmptyLayout,
    path: ClientRoutes.SignIn,
    isPrivate: false,
  },
  {
    component: AuthView,
    layout: EmptyLayout,
    path: ClientRoutes.SignUp,
    isPrivate: false,
  },
];

export default routes;
