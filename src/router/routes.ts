import type { IRouterParams } from '@/router/types';

import { ClientRoutes } from '@/constants';
import { EmptyLayout, MainLayout } from '@/layouts';
import { AuthView, CompleteView, TrackingView, WorkoutView, GoogleAuthView } from '@/views';

const routes: IRouterParams[] = [
  {
    component: GoogleAuthView,
    layout: EmptyLayout,
    path: ClientRoutes.GoogleAuth,
    isPrivate: false,
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
