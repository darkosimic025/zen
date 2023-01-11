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
      <Button><Loader size='m' color='currentColor'></Loader>Button</Button>
      <Loader size='l' color='danger'></Loader>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
