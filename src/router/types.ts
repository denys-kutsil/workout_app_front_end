import { FC } from 'react';

import { ClientRoutes } from '@/constants';
import type { ILayoutProps } from '@/types';

export interface IRouterParams {
  component: FC;
  path: ClientRoutes;
  layout: FC<ILayoutProps>;
  isPrivate: boolean;
}
