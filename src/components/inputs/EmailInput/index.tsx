import { Email } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import React from 'react';

import { TextInput } from '@/components';

import styles from './styles';

import type { IEmailInputProps } from './types';

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
