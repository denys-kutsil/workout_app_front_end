import { SvgIcon } from '@mui/material';
import React from 'react';

import styles from '@/components/icons/styles';
import { mergeSx } from '@/utils';

import type { SvgIconProps } from '@mui/material';

const PlayPrevIcon = ({ viewBox = '0 0 12 12', sx, ...rest }: SvgIconProps) => (
  <SvgIcon viewBox={viewBox} sx={mergeSx(styles.root, sx)} {...rest}>
    <path d="M12 12L3.5 6L12 0V12ZM2 0V12H0V0H2Z" fill="#AA00FF" />
  </SvgIcon>
);

export default PlayPrevIcon;
