import React from 'react';
import type { MouseEvent } from 'react';

import { Close } from '@mui/icons-material';
import { Box, FormControl, FormHelperText, IconButton, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';

import { styles } from './styles';
import { IImageInputProps } from './types';

const acceptImageTypes = {
  'image/png': ['.png'],
  'image/jpeg': ['.jpeg'],
};

function ImageInput<FormValues extends Record<string, unknown> = Record<string, unknown>>({
  field: { value, name, onBlur },
  form: { touched, errors, setFieldValue },
  placeholder,
}: IImageInputProps<FormValues>) {
  const preview = typeof value === 'string' ? value : URL.createObjectURL(value);
  const hasError = Boolean(touched[name] && errors[name]);

  const onDrop = (files: File[]) => {
    if (files.length) {
      setFieldValue(name, files[0]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: acceptImageTypes,
    onDrop,
    multiple: false,
    maxFiles: 1,
  });

  const onDeleteIcon = (e: MouseEvent<HTMLElement>) => {
    setFieldValue(name, '');
    e.stopPropagation();
  };

  return (
    <FormControl fullWidth>
      <Typography variant="h6" mb={1}>
        {placeholder}
      </Typography>
      <Box {...getRootProps()} sx={[styles.zone, isDragActive ? styles.active : null]}>
        {value ? (
          <>
            <IconButton sx={styles.iconBtn} onClick={onDeleteIcon}>
              <Close />
            </IconButton>
            <Box sx={styles.previewContainer}>
              <Box component="img" src={preview} sx={styles.img} />
            </Box>
          </>
        ) : (
          <Box sx={styles.imageUploadContainer}>
            <input accept="image/png, image/jpeg" {...getInputProps()} onBlur={onBlur} />
            <Typography variant="h5">Add Image</Typography>
            <Typography variant="caption" sx={styles.caption}>
              {isDragActive
                ? 'Drop the image here...'
                : 'Upload image from your computer or drag files here.'}
            </Typography>
          </Box>
        )}
      </Box>
      <FormHelperText error={hasError}>{(hasError ? errors[name] : ' ') as string}</FormHelperText>
    </FormControl>
  );
}

export default ImageInput;
