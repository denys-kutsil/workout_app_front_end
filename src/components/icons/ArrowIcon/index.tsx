import React from 'react';

import { SvgIcon } from '@mui/material';

import type { SvgIconProps } from '@mui/material';

import styles from '@/components/icons/styles';
import { mergeSx } from '@/utils';

const ArrowIcon = ({ viewBox = '0 0 24 24', sx, ...rest }: SvgIconProps) => (
  <SvgIcon viewBox={viewBox} sx={mergeSx(styles.root, sx)} {...rest}>
    <path
      d="M12 20L13.41 18.59L7.83 13L20 13L20 11L7.83 11L13.41 5.41L12 4L4 12L12 20Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default ArrowIcon;
