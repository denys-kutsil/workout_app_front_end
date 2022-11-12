import { drawerClasses } from '@mui/material';

const drawerWidth = 250;

export const styles = {
  container: {
    display: 'flex',
  },
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    minWidth: 100,
  },

  nav: {
    width: { sm: drawerWidth },
    flexShrink: { sm: 0 },
  },
  openDrawer: {
    mr: 2,
    display: { sm: 'none' },
  },
  main: {
    flexGrow: 1,
    p: 3,
    width: '100%',
    minHeight: '100vh',
    backgroundImage: "url('/assets/background.jpeg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  drawerMobile: {
    display: { xs: 'block', sm: 'none' },
    [`& .${drawerClasses.paper}`]: {
      boxSizing: 'border-box',
      width: drawerWidth,
    },
  },
  drawerDesktop: {
    display: { xs: 'none', sm: 'block' },
    [`& .${drawerClasses.paper}`]: {
      boxSizing: 'border-box',
      width: drawerWidth,
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  accountIcon: {
    color: 'blue',
    width: 30,
    height: 30,
  },
  menu: {
    mt: '45px',
  },
  menuAnchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  menuTransformOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
} as const;
