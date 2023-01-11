// .storybook/preview.js
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '../src/components/Button/Button';
import Loader from '../src/components/Loader/Loader'
import { ThemeProvider } from 'styled-components';
import {theme} from '../src/theme/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button><Loader></Loader>Button</Button>
      <Loader></Loader>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
