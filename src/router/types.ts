import type { FC } from 'react';

import type { ILayoutProps } from '@/types';

import { ClientRoutes } from '@/constants';

export interface IRouterParams {
  component: FC;
  path: ClientRoutes;
  layout: FC<ILayoutProps>;
  isPrivate: boolean;
}
