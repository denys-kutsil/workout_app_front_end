import React from 'react';

import { ROUTES_ENUM } from '@/constants';

import type { ILayoutProps } from '@/types';

export interface IRouterParams {
  component: React.FC;
  path: ROUTES_ENUM;
  layout: React.FC<ILayoutProps>;
  isPrivate: boolean;
}
