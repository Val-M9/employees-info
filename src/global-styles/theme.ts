import { createTheme, darkScrollbar } from '@mui/material';
import { ColorPalette } from './colors';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...darkScrollbar({
          track: ColorPalette.TEAL_800,
          thumb: ColorPalette.TEAL_600,
          active: ColorPalette.TEAL_400,
        }),
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          position: 'relative',
          width: '90%',
          left: '2px',
          maxWidth: '1440px',
          margin: '150px auto',
          maxHeight: '500px',
          border: `2px solid ${ColorPalette.TEAL_800}`,
          borderRadius: '5px',
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          position: 'absolute',
          top: '100px',
          left: '45%',
        },
      },
    },
  },
});
