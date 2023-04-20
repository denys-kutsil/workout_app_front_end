import React, { FC } from 'react';

import { Container } from '@mui/material';

import type { ILayoutProps } from '@/types';

const EmptyLayout: FC<ILayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default EmptyLayout;
