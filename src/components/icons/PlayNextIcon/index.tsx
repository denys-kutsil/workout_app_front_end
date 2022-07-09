import { SvgIcon } from '@mui/material';
import React from 'react';

import styles from '@/components/icons/styles';
import { mergeSx } from '@/utils';

import type { SvgIconProps } from '@mui/material';

const PlayNextIcon = ({ viewBox = '0 0 12 12', sx, ...rest }: SvgIconProps) => (
  <SvgIcon viewBox={viewBox} sx={mergeSx(styles.root, sx)} {...rest}>
    <path d="M0 12L8.5 6L0 0V12ZM10 0V12H12V0H10Z" fill="#AA00FF" />
  </SvgIcon>
);

export default PlayNextIcon;
