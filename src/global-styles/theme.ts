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
          left: '3px',
          margin: '150px auto 70px',
          height: '500px',
          border: `2px solid ${ColorPalette.TEAL_800}`,
          borderRadius: '5px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: `${ColorPalette.TEAL_800}`,
          color: `${ColorPalette.WHITE}`,
          height: '70px',
          fontSize: '16px',
          fontWeight: '700',
          borderRight: `1px solid ${ColorPalette.WHITE}`,
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
