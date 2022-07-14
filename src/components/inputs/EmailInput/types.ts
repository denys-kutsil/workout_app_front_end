import { ITextInputProps } from '@/components/inputs/TextInput/types';

export type IEmailInputProps<
  V = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
> = ITextInputProps<V, FormValues>;
