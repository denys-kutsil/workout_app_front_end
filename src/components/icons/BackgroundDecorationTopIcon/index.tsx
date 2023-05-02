import React from 'react';

import { SvgIcon } from '@mui/material';

import type { SvgIconProps } from '@mui/material';

import styles from '@/components/icons/styles';
import { mergeSx } from '@/utils';

const BackgroundDecorationTopIcon = ({ viewBox = '0 0 438 361', sx, ...rest }: SvgIconProps) => (
  <SvgIcon viewBox={viewBox} sx={mergeSx(styles.root, sx)} {...rest}>
    <path
      opacity="0.16"
      d="M-506 -356.247C-506 58.6035 148.361 595.805 395.272 250.506C623.827 -69.1224 -138.991 -187.352 -138.991 -602.202C-138.991 -1017.05 130.675 -1006.03 121.928 -1295.09C108.582 -1736.15 -506 -771.097 -506 -356.247Z"
      fill="#EEEEEE"
    />
    <path
      opacity="0.16"
      d="M-536 -403.247C-536 11.6035 118.361 548.805 365.272 203.506C593.827 -116.122 -168.991 -234.352 -168.991 -649.202C-168.991 -1064.05 100.675 -1053.03 91.9282 -1342.09C78.5816 -1783.15 -536 -818.097 -536 -403.247Z"
      fill="#EEEEEE"
    />
    <path
      opacity="0.16"
      d="M-559 -450.247C-559 -35.3965 95.3615 501.805 342.272 156.506C570.827 -163.122 -191.991 -281.352 -191.991 -696.202C-191.991 -1111.05 77.6749 -1100.03 68.9282 -1389.09C55.5816 -1830.15 -559 -865.097 -559 -450.247Z"
      fill="#EEEEEE"
    />
    <path
      opacity="0.16"
      d="M-589 -489.247C-589 -74.3965 65.3615 462.805 312.272 117.506C540.827 -202.122 -221.991 -320.352 -221.991 -735.202C-221.991 -1150.05 47.6749 -1139.03 38.9282 -1428.09C25.5816 -1869.15 -589 -904.097 -589 -489.247Z"
      fill="#EEEEEE"
    />
  </SvgIcon>
);

export default BackgroundDecorationTopIcon;
