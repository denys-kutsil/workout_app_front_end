import { alpha } from '@mui/material';

import { theme, Theme } from '@/constants';

const { common, primary, grey } = theme.palette;

const styles = {
  title: {
    padding: (theme: Theme) => theme.spacing(5.25, 0, 4, 0),
    textAlign: 'center',
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circularProgressbar: {
    width: 128,
    height: 128,
  },
  video: {
    position: 'relative',
    marginTop: 2.6,
  },
  pause: {
    width: '100%',
    height: '100%',
    background: alpha(common.black, 0.6),
    borderRadius: 1,
    display: 'flex',
    top: 0,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  footer: {
    borderTop: `8px solid ${grey.A200}`,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    py: 1,
    background: common.white,
  },
  imagePreview: {
    width: '100%',
    height: 300,
    objectFit: 'contain',
  },
  switchExercise: {
    width: 80,
    height: 50,
    border: `2px solid ${primary.main}`,
    borderRadius: 1,
    background: 'transparent',
  },
  leaveButton: {
    border: `2px solid ${common.white}`,
    background: 'transparent',
    color: common.white,
    borderRadius: 1,
    width: 250,
    height: 48,
    mt: 2,
    '&:hover': {
      border: `2px solid  ${grey.A200}`,
    },
  },
  arrowIcon: {
    fontSize: 12,
  },
  playAndPauseIcon: {
    fontSize: 64,
  },
  descriptionContainer: {
    maxWidth: {
      md: 300,
      xs: '100%',
    },
    mt: {
      md: 0,
      xs: 1,
    },
  },
  description: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: {
      md: 'row',
      xs: 'column',
    },
    px: {
      md: 0,
      xs: 1,
    },
    mt: 3,
  },
} as const;

export default styles;
