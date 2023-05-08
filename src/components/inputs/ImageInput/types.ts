import type { FieldProps } from 'formik';
import type { DropzoneOptions } from 'react-dropzone';

export interface IImageInputProps<
  FormValues extends Record<string, unknown> = Record<string, unknown>,
> extends FieldProps<File | string, FormValues>,
    Omit<DropzoneOptions, 'onDrop' | 'accept'> {
  placeholder: string;
}
