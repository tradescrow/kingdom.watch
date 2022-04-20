import { createTheme } from '@mui/material';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#9e9e9e',
    },
    background: {
      default: '#222222',
    },
    text: {
      primary: '#e1e1e1',
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#5a5a5a',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '8px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#9e9e9e',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        iconOutlined: {
          color: '#e1e1e1',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#222222',
          color: '#e1e1e1',
        },
      },
    },
  },
});

export default Theme;
