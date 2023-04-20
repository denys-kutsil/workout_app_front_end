import { createTheme } from '@mui/material/styles';

export type Theme = typeof theme;

const baseTheme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 992,
      xl: 1440,
    },
  },
});

export const theme = createTheme(baseTheme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: null,
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '&:hover': {
            cursor: 'initial',
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: 18,
          fontWeight: 600,
          display: 'flex',
          justifyContent: 'space-between',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          minWidth: '100%',
          [baseTheme.breakpoints.up('sm')]: {
            minWidth: 364,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: '100%',
          fontWeight: 500,
          borderRadius: 10,
          border: '0.5px solid rgba(165, 180, 203, 0.24)',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '0.5px solid #374C5E',
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px',
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderWidth: '0.5px',
          },
        },
        input: {
          WebkitBoxShadow: '0 0 0 1000px white inset',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.02)',
            transition: '0.5s ease transform',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          p: 0,
          '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            transition: '0.5s ease transform',
            background: 'transparent',
          },
          '& .MuiSvgIcon-root': {
            '&:hover': {
              cursor: 'pointer',
            },
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          height: 40,
          cursor: 'pointer',
          borderRadius: 10,
          fontSize: 16,
          fontWeight: 600,
          p: 3,
          width: '100%',
          '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.02)',
            transition: '0.5s ease transform',
          },
          '&.Mui-disabled': {
            opacity: 0.5,
          },
          '& .MuiSvgIcon-root': {
            '&:hover': {
              cursor: 'pointer',
            },
          },
        },
        sizeLarge: {
          padding: '1.5rem 1.25rem',
          fontSize: '1rem',
          lineHeight: 1.3125,
          letterSpacing: 0,
          fontFamily:
            '"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
          fontWeight: 700,
        },
        contained: {
          padding: '8px 24px',
        },
        text: {
          '&:hover': {
            background: 'transparent',
          },
          textDecoration: 'none',
          color: '#3F8CFF',
          textAlign: 'center',
          cursor: 'pointer',
          display: 'flex',
          fontWeight: 500,
          fontSize: 15,
        },
        outlinedSecondary: {
          border: '0.5px solid #7C8DA6',
          '&:hover': {
            border: '0.5px solid #7C8DA6',
          },
        },
        containedPrimary: {
          background: '#aa00ff',
          boxShadow: '0px 16px 32px rgba(170, 0, 255, 0.24)',
          '&:hover, &:focus': {
            background: '#aa00ff',
            cursor: 'pointer',
            transform: 'scale(1.05)',
            transition: '0.5s ease transform',
            boxShadow: '0px 16px 32px rgba(170, 0, 255, 0.24)',
          },
        },
        containedSecondary: {
          backgroundColor: '#A5B4CB',
          color: '#7C8DA6',
          fontSize: 16,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
          minWidth: '100%',
          margin: 0,
          minHeight: '100vh',
          [baseTheme.breakpoints.up('sm')]: {
            borderRadius: 14,
            minWidth: 550,
            margin: '32px',
            minHeight: 'initial',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#EAEEF3',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: '#0072E5',
          fontWeight: 700,
          display: 'inline-flex',
          alignItems: 'center',
          '&.MuiTypography-body1 > svg': {
            marginTop: 2,
          },
          '& svg:last-child': {
            marginLeft: 2,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          '&:hover, &:focus': {
            backgroundColor: '#EAEEF3',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: '#a1a4a7',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        iconFilled: {
          top: 'calc(50% - .25em)',
        },
        root: {
          '&.Mui-disabled': {
            opacity: 0.5,
          },
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          background: '#FCFCFC',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '100%',
          letterSpacing: ' -0.02em',
          '&.Mui-selected': {
            background: '#ffffff',
          },
          '& .MuiSvgIcon-root': {
            '&:hover': {
              cursor: 'pointer',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          '&[href]': {
            textDecorationLine: 'none',
          },
        },
        outlined: {
          display: 'block',
          borderColor: '#E5E8EC',
          'a&, button&': {
            '&:hover': {
              boxShadow: '1px 1px 20px 0 rgb(90 105 120 / 20%)',
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '0px 0px',
          border: '1px solid #e4eaf3',
        },
        head: {
          color: '#7C8DA6',
          background: '#f5f7f9',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '9px',
          lineHeight: '100%',
          letterSpacing: '-0.02em',
        },
        body: {
          color: '#111111',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '11px',
          lineHeight: '100%',
          letterSpacing: '-0.02em',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          minHeight: 24,
          paddingBottom: 6,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: '#f5f7f9',
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          color: '#46505A',
          borderColor: '#E5E8EC',
          '&.Mui-selected': {
            borderColor: '#007FFF !important',
            color: '#007FFF',
            backgroundColor: '#F0F7FF',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          paddingTop: 7,
          paddingBottom: 7,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 32,
          height: 20,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            '&.Mui-checked': {
              transform: 'translateX(11px)',
              color: '#fff',
            },
          },
        },
        switchBase: {
          height: 20,
          width: 20,
          padding: 0,
          color: '#fff',
          '&.Mui-checked + .MuiSwitch-track': {
            opacity: 1,
          },
        },
        track: {
          opacity: 1,
          borderRadius: 32,
          backgroundColor: '#BFC7CF',
        },
        thumb: {
          flexShrink: 0,
          width: '14px',
          height: '14px',
        },
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      '50': '#F0F7FF',
      '100': '#C2E0FF',
      '200': '#A5D8FF',
      '300': '#66B2FF',
      '400': '#3399FF',
      '500': '#007FFF',
      '600': '#0072E5',
      '700': '#0059B2',
      '800': '#004C99',
      '900': '#003A75',
      main: '#aa00ff',
      light: '#66B2FF',
      dark: '#0059B2',
      contrastText: '#fff',
    },
    divider: '#E5E8EC',
    primaryDark: {
      '50': '#E2EDF8',
      '100': '#CEE0F3',
      '200': '#91B9E3',
      '300': '#5090D3',
      '400': '#265D97',
      '500': '#1E4976',
      '600': '#173A5E',
      '700': '#132F4C',
      '800': '#001E3C',
      '900': '#0A1929',
      main: '#5090D3',
    },
    common: {
      black: '#111111',
      white: '#fff',
      red: '#FC474A',
      green: '#6fcf97',
      yellow: '#FEBD5B',
      blue: '#0e0080',
    },
    text: {
      primary: '#20262D',
      secondary: '#2F3A45',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    grey: {
      '50': '#FCFCFC',
      '100': '#EAEEF3',
      '200': '#E5E8EC',
      '300': '#D7DCE1',
      '400': '#BFC7CF',
      '500': '#A5B4CB',
      '600': '#7C8DA6',
      '700': '#46505A',
      '800': '#2F3A45',
      '900': '#222222',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#9e9e9e',
    },
    lightGrey: {
      main: '#F5F7F9',
      dark: '#EAEEF3',
      contrastText: '#7C8DA6',
    },
    error: {
      '50': '#FFF0F1',
      '100': '#FFDBDE',
      '200': '#FFBDC2',
      '300': '#FF99A2',
      '400': '#FF7A86',
      '500': '#FF505F',
      '600': '#EB0014',
      '700': '#C70011',
      '800': '#94000D',
      '900': '#570007',
      main: '#EB0014',
      light: '#FF99A2',
      dark: '#C70011',
      contrastText: '#fff',
    },
    success: {
      '50': '#E9FBF0',
      '100': '#C6F6D9',
      '200': '#9AEFBC',
      '300': '#6AE79C',
      '400': '#3EE07F',
      '500': '#21CC66',
      '600': '#1DB45A',
      '700': '#1AA251',
      '800': '#178D46',
      '900': '#0F5C2E',
      main: 'rgba(29, 233, 182, 1)',
      light: '#6AE79C',
      dark: '#6AE79C',
      contrastText: '#fff',
    },
    warning: {
      '50': '#FFF9EB',
      '100': '#FFF4DB',
      '200': '#FFEDC2',
      '300': '#FFE4A3',
      '400': '#FFD980',
      '500': '#FCC419',
      '600': '#FAB005',
      '700': '#F1A204',
      '800': '#DB9A00',
      '900': '#8F6400',
      main: 'rgba(255, 64, 129, 1)',
      light: '#FFE4A3',
      dark: '#F1A204',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    secondary: {
      main: '#ebeef2',
      light: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#fff',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: '#fff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      paper: '#fff',
      default: '#fff',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: `"Source Sans Pro", sans-serif`,

    h1: {
      fontWeight: 700,
      color: '#111111',
      fontSize: 72,
      fontFamily: 'Source Sans Pro',
    },
    h2: {
      fontWeight: 700,
      color: '#111111',
      fontSize: 56,
      fontFamily: 'Source Sans Pro',
    },
    h3: {
      color: '#111111',
      fontSize: 32,
      fontWeight: 700,
      fontFamily: 'Source Sans Pro',
    },
    h4: {
      fontSize: 24,
      color: '#111111',
      fontWeight: 600,
      fontFamily: 'Source Sans Pro',
    },
    h5: {
      fontSize: 18,
      color: '#111111',
      fontWeight: 600,
      fontFamily: 'Source Sans Pro',
    },
    h6: {
      fontSize: 14,
      color: '#193547',
      fontWeight: 600,
      fontFamily: 'Source Sans Pro',
    },
    button: {
      textTransform: 'initial',
      fontWeight: 500,
      letterSpacing: 0,
      fontFamily: 'Source Sans Pro',
      fontSize: '0.875rem',
      lineHeight: 1.75,
    },
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.3333333333333333,
      letterSpacing: 0,
      fontWeight: 500,
      fontFamily: 'Source Sans Pro',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: 0,
      fontFamily: 'Source Sans Pro',
      fontWeight: 400,
    },
    body2: {
      fontSize: 12,
      color: '#111111',
      fontWeight: 500,
      fontFamily: 'Source Sans Pro',
    },
    body3: {
      fontSize: 9,
      fontWeight: 600,
      color: '#111111',
      fontFamily: 'Source Sans Pro',
    },
    caption: {
      display: 'inline-block',
      fontSize: '0.75rem',
      lineHeight: 1.5,
      letterSpacing: 0,
      fontWeight: 700,
      fontFamily: 'Source Sans Pro',
    },
    subtitle2: {
      fontFamily: 'Source Sans Pro',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57,
    },
    overline: {
      fontFamily: 'Source Sans Pro',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      textTransform: 'uppercase',
    },
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.07),0px 1px 3px 0px rgba(0,0,0,0.06)',
    '0px 3px 1px -2px rgba(0,0,0,0.1),0px 2px 2px 0px rgba(0,0,0,0.07),0px 1px 5px 0px rgba(0,0,0,0.06)',
    '0px 3px 3px -2px rgba(0,0,0,0.1),0px 3px 4px 0px rgba(0,0,0,0.07),0px 1px 8px 0px rgba(0,0,0,0.06)',
    '0px 2px 4px -1px rgba(0,0,0,0.1),0px 4px 5px 0px rgba(0,0,0,0.07),0px 1px 10px 0px rgba(0,0,0,0.06)',
    '0px 3px 5px -1px rgba(0,0,0,0.1),0px 5px 8px 0px rgba(0,0,0,0.07),0px 1px 14px 0px rgba(0,0,0,0.06)',
    '0px 3px 5px -1px rgba(0,0,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.07),0px 1px 18px 0px rgba(0,0,0,0.06)',
    '0px 4px 5px -2px rgba(0,0,0,0.1),0px 7px 10px 1px rgba(0,0,0,0.07),0px 2px 16px 1px rgba(0,0,0,0.06)',
    '0px 5px 5px -3px rgba(0,0,0,0.1),0px 8px 10px 1px rgba(0,0,0,0.07),0px 3px 14px 2px rgba(0,0,0,0.06)',
    '0px 5px 6px -3px rgba(0,0,0,0.1),0px 9px 12px 1px rgba(0,0,0,0.07),0px 3px 16px 2px rgba(0,0,0,0.06)',
    '0px 6px 6px -3px rgba(0,0,0,0.1),0px 10px 14px 1px rgba(0,0,0,0.07),0px 4px 18px 3px rgba(0,0,0,0.06)',
    '0px 6px 7px -4px rgba(0,0,0,0.1),0px 11px 15px 1px rgba(0,0,0,0.07),0px 4px 20px 3px rgba(0,0,0,0.06)',
    '0px 7px 8px -4px rgba(0,0,0,0.1),0px 12px 17px 2px rgba(0,0,0,0.07),0px 5px 22px 4px rgba(0,0,0,0.06)',
    '0px 7px 8px -4px rgba(0,0,0,0.1),0px 13px 19px 2px rgba(0,0,0,0.07),0px 5px 24px 4px rgba(0,0,0,0.06)',
    '0px 7px 9px -4px rgba(0,0,0,0.1),0px 14px 21px 2px rgba(0,0,0,0.07),0px 5px 26px 4px rgba(0,0,0,0.06)',
    '0px 8px 9px -5px rgba(0,0,0,0.1),0px 15px 22px 2px rgba(0,0,0,0.07),0px 6px 28px 5px rgba(0,0,0,0.06)',
    '0px 8px 10px -5px rgba(0,0,0,0.1),0px 16px 24px 2px rgba(0,0,0,0.07),0px 6px 30px 5px rgba(0,0,0,0.06)',
    '0px 8px 11px -5px rgba(0,0,0,0.1),0px 17px 26px 2px rgba(0,0,0,0.07),0px 6px 32px 5px rgba(0,0,0,0.06)',
    '0px 9px 11px -5px rgba(0,0,0,0.1),0px 18px 28px 2px rgba(0,0,0,0.07),0px 7px 34px 6px rgba(0,0,0,0.06)',
    '0px 9px 12px -6px rgba(0,0,0,0.1),0px 19px 29px 2px rgba(0,0,0,0.07),0px 7px 36px 6px rgba(0,0,0,0.06)',
    '0px 10px 13px -6px rgba(0,0,0,0.1),0px 20px 31px 3px rgba(0,0,0,0.07),0px 8px 38px 7px rgba(0,0,0,0.06)',
    '0px 10px 13px -6px rgba(0,0,0,0.1),0px 21px 33px 3px rgba(0,0,0,0.07),0px 8px 40px 7px rgba(0,0,0,0.06)',
    '0px 10px 14px -6px rgba(0,0,0,0.1),0px 22px 35px 3px rgba(0,0,0,0.07),0px 8px 42px 7px rgba(0,0,0,0.06)',
    '0px 11px 14px -7px rgba(0,0,0,0.1),0px 23px 36px 3px rgba(0,0,0,0.07),0px 9px 44px 8px rgba(0,0,0,0.06)',
    '0px 11px 15px -7px rgba(0,0,0,0.1),0px 24px 38px 3px rgba(0,0,0,0.07),0px 9px 46px 8px rgba(0,0,0,0.06)',
  ],
});
