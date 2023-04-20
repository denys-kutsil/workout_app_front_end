import { FC } from 'react';

import { Routes } from '@/constants';
import type { ILayoutProps } from '@/types';

export interface IRouterParams {
  component: FC;
  path: Routes;
  layout: FC<ILayoutProps>;
  isPrivate: boolean;
}
