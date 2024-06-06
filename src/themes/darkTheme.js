import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 240,
          backgroundColor: '#333',
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

export default darkTheme;
