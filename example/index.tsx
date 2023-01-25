// .storybook/preview.js
import 'react-app-polyfill/ie11';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Button from '../src/components/Button/Button';
import Loader from '../src/components/Loader/Loader';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/ThemeProvider';
import { GlobalStyles } from '../src/theme/GlobalStyles';
import Breadcrumbs from '../src/components/Breadcrumbs/Breadcrumbs';
import BreadcrumbItem from '../src/components/Breadcrumbs/BreadcrumbItem';
import Avatar from '../src/components/Avatar/Avatar';
import AvatarGroup from '../src/components/AvatarGroup/AvatarGroup';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AvatarGroup max={3}>
        <Avatar initials='DS'  alt="user avatar" size="M" />
        <Avatar initials='MS' alt="user avatar" size="M" />
        <Avatar initials='DD' alt="user avatar" size="M" />
        <Avatar initials='DD' alt="user avatar" size="M" />
        <Avatar initials='DD' alt="user avatar" size="M" />
      </AvatarGroup>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
