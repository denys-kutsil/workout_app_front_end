import React from 'react';

import { SvgIcon } from '@mui/material';

import type { SvgIconProps } from '@mui/material';

import styles from '@/components/icons/styles';
import { mergeSx } from '@/utils';

const PlayTrackingIcon = ({ viewBox = '0 0 64 64', sx, ...rest }: SvgIconProps) => (
  <SvgIcon viewBox={viewBox} sx={mergeSx(styles.root, sx)} {...rest}>
    <path
      d="M32.0002 5.33325C17.2802 5.33325 5.3335 17.2799 5.3335 31.9999C5.3335 46.7199 17.2802 58.6666 32.0002 58.6666C46.7202 58.6666 58.6668 46.7199 58.6668 31.9999C58.6668 17.2799 46.7202 5.33325 32.0002 5.33325ZM26.6668 43.9999V19.9999L42.6668 31.9999L26.6668 43.9999Z"
      fill="#AA00FF"
    />
  </SvgIcon>
);

export default PlayTrackingIcon;
