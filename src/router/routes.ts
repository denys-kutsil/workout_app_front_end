import { ROUTES_ENUM } from '@/constants';
import { EmptyLayout, MainLayout } from '@/layouts';
import { IRouterParams } from '@/router/types';
import { AuthView, CompleteView, TrackingView, WorkoutView } from '@/views';

const routes: IRouterParams[] = [
  {
    component: WorkoutView,
    layout: MainLayout,
    path: ROUTES_ENUM.WORKOUT,
    isPrivate: false,
  },
  {
    component: TrackingView,
    layout: EmptyLayout,
    path: ROUTES_ENUM.TRACKING,
    isPrivate: false,
  },
  {
    component: CompleteView,
    layout: EmptyLayout,
    path: ROUTES_ENUM.COMPLETE,
    isPrivate: false,
  },
  {
    component: AuthView,
    layout: EmptyLayout,
    path: ROUTES_ENUM.SIGN_IN,
    isPrivate: false,
  },
  {
    component: AuthView,
    layout: EmptyLayout,
    path: ROUTES_ENUM.SIGN_UP,
    isPrivate: false,
  },
];

export default routes;
