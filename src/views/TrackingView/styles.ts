import { Theme } from '@/constants';

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
    background: 'rgb(33, 33, 33, 0.6)',
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
    borderTop: '8px solid #eeeeee',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    py: 1,
    background: 'white',
  },
  imagePreview: {
    width: '100%',
    height: 300,
    objectFit: 'contain',
    marginTop: 30,
  },
  switchExercise: {
    width: 80,
    height: 50,
    border: '2px solid #aa00ff',
    borderRadius: 1,
    background: 'transparent',
  },
  leaveButton: {
    border: '2px solid #eeeeee',
    background: 'transparent',
    color: '#eeeeee',
    borderRadius: 1,
    width: 250,
    height: 48,
    mt: 2,
    '&:hover': {
      border: '2px solid  #eeeeee',
    },
  },
  playAndPause: {
    '&:hover, &:focus': {
      cursor: 'pointer',
      transform: 'scale(1.05)',
      transition: '0.5s ease transform',
    },
  },
  arrowIcon: {
    fontSize: 12,
  },
  playAndPauseIcon: {
    fontSize: 64,
  },
} as const;

export default styles;
