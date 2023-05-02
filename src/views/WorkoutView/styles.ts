import type { Theme } from '@/constants';

import { theme } from '@/constants';

const styles = {
  buttonContainer: {
    position: 'fixed',
    bottom: 30,
    width: { xs: 'calc(100% - 32px)', md: theme.breakpoints.values.md },
    left: {
      xs: '50%',
      md: 'auto',
    },
    transform: { xs: 'translate(-50%, 0)', md: 'none' },
  },
  date: {
    py: 2.6,
  },
  button: {
    width: '100%',
    p: 3,
  },
  arrowIcon: {
    margin: (theme: Theme) => theme.spacing(1, 0, 3, 0),
  },
  exercise: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 1.2,
  },
  categoryItem: {
    padding: (theme: Theme) => theme.spacing(1.25, 0, 3, 0),
    borderTop: '1px solid #eeeeee',
  },
  categories: {
    marginTop: 3,
    paddingBottom: 11,
    padding: {
      md: (theme: Theme) => theme.spacing(0, 0, 10, 0),
      xs: (theme: Theme) => theme.spacing(0, 2, 10, 2),
    },
  },
  workoutItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: 2,
  },
} as const;

export default styles;
