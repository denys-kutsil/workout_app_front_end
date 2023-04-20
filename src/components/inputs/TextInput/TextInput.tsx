import React, { ReactNode } from 'react';

import { TextField } from '@mui/material';

import type { ITextInputProps } from './types';

function TextInput<
  V = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
>({
  field,
  form: { touched, errors },
  error,
  helperText,
  hideEmptyHelperText = false,
  ...props
}: ITextInputProps<V, FormValues>) {
  const hasError = error ?? Boolean(touched[field.name] && errors[field.name]);

  return (
    <TextField
      {...field}
      {...props}
      error={hasError}
      helperText={
        (hasError
          ? helperText ?? errors[field.name]
          : hideEmptyHelperText
          ? null
          : ' ') as ReactNode
      }
    />
  );
}

export default TextInput;
