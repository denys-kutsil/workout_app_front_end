const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: {
      md: '60%',
      xs: 'auto',
    },
    margin: 'auto',
    height: '100vh',
    textAlign: 'center',
  },
  timeContainerWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    mt: 1,
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 10px',
    my: 1.25,
  },
  checkIcon: {
    fontSize: 47,
  },
  btn: {
    mt: 2,
    p: 3,
  },
} as const;

export default styles;
