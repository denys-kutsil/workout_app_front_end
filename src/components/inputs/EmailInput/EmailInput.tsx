import React from 'react';

import { Email } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';

import styles from './styles';

import type { IEmailInputProps } from './types';

import { TextInput } from '@/components';

function EmailInput<
  V = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
>(props: IEmailInputProps<V, FormValues>) {
  return (
    <TextInput
      {...props}
      placeholder="Email"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={styles.adornment}>
            <Email />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default EmailInput;
