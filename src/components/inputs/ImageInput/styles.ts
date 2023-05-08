import { alpha, svgIconClasses } from '@mui/material';

import { Theme } from '@/constants';

export const styles = {
  icon: {
    color: 'primary.main',
    fontSize: 40,
    mb: 1.5,
  },
  caption: {
    mt: 2,
    color: 'gray.600',
  },
  zone: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px dashed',
    borderColor: 'primary.main',
    borderRadius: 1,
    backgroundColor: (theme: Theme) => alpha(theme.palette.primary.main, 0.03),
  },
  active: {
    borderColor: 'success.main',
    backgroundColor: (theme: Theme) => alpha(theme.palette.success.main, 0.03),
    [`& > .${svgIconClasses.root}`]: {
      color: 'success.main',
    },
  },
  previewContainer: {
    height: 200,
    my: 2,
    display: 'flex',
    flexWrap: 'wrap',
    '& > a': {
      alignItems: 'center',
      justifyContent: 'center',
      color: 'primary.main',
    },
  },
  preview: {
    width: 64,
    height: 64,
    mb: 2.5,
    mr: 1,
    objectFit: 'cover',
    borderRadius: 1.5,
    display: 'flex',
    flexShrink: 0,
    backgroundColor: (theme: Theme) => alpha(theme.palette.primary.main, 0.03),
  },
  removeButton: {
    position: 'relative',
    ml: -5,
    height: 40,
    mt: -1,
  },
  img: {
    height: 'inherit',
    width: '100%',
  },
  iconBtn: {
    ml: '90%',
    position: 'absolute',
  },
  imageUploadContainer: {
    p: 2.5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
} as const;
