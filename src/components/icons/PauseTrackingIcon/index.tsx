import React from 'react';

import { SvgIcon } from '@mui/material';

import type { SvgIconProps } from '@mui/material';

import styles from '@/components/icons/styles';
import { mergeSx } from '@/utils';

const PauseTrackingIcon = ({ viewBox = '0 0 64 64', sx, ...rest }: SvgIconProps) => (
  <SvgIcon viewBox={viewBox} sx={mergeSx(styles.root, sx)} {...rest}>
    <path
      d="M32.0002 5.33325C17.2802 5.33325 5.3335 17.2799 5.3335 31.9999C5.3335 46.7199 17.2802 58.6666 32.0002 58.6666C46.7202 58.6666 58.6668 46.7199 58.6668 31.9999C58.6668 17.2799 46.7202 5.33325 32.0002 5.33325ZM29.3335 42.6666H24.0002V21.3333H29.3335V42.6666ZM40.0002 42.6666H34.6668V21.3333H40.0002V42.6666Z"
      fill="#AA00FF"
    />
  </SvgIcon>
);

export default PauseTrackingIcon;
