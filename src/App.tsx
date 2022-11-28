import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { store } from './store/store';
import { Home } from './pages/home/Home';
import { theme } from './global-styles/theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme>
          <Home />
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
