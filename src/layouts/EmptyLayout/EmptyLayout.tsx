import { Container } from '@mui/material';
import React, { FC } from 'react';

import { ILayoutProps } from '@/types';

const EmptyLayout: FC<ILayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default EmptyLayout;
