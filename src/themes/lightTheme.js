// src/themes/lightTheme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 240,
          backgroundColor: '#f5f5f5',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '10px 20px',
        },
      },
    },
  },
});

export default lightTheme;


