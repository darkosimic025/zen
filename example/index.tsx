// .storybook/preview.js
import 'react-app-polyfill/ie11';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Button from '../src/components/Button/Button';
import Loader from '../src/components/Loader/Loader';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/ThemeProvider';
import { GlobalStyles } from '../src/theme/GlobalStyles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>
        <Loader size="m" color="currentColor"></Loader>Button
      </Button>
      <Loader size="l" color="danger"></Loader>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
    <GlobalStyles />
  </>
);
