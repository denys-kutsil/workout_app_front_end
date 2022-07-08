import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';
import { mergeSx } from '@/utils';
import styles from '@/components/icons/styles';

const CheckIcon = ({ viewBox = '0 0 57 44', sx, ...rest }: SvgIconProps) => (
  <SvgIcon viewBox={viewBox} sx={mergeSx(styles.root, sx)} {...rest}>
    <path
      d="M18.5 34.2046L5.29501 20.9996L0.79834 25.4646L18.5 43.1663L56.5 5.16629L52.035 0.701294L18.5 34.2046Z"
      fill="#1DE9B6"
    />
  </SvgIcon>
);

export default CheckIcon;
