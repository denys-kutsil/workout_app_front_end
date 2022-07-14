import type { TextFieldProps } from '@mui/material';
import type { FieldProps } from 'formik';

export interface ITextInputProps<
  V = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
> extends FieldProps<V, FormValues>,
    Omit<TextFieldProps, 'name' | 'value' | 'onChange' | 'onBlur'> {
  hideEmptyHelperText?: boolean;
}
