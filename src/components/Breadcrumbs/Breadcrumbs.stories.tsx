// Breadcrumbs.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Breadcrumbs from './Breadcrumbs';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/ThemeProvider';
import BreadcrumbItem from './BreadcrumbItem';
import { GlobalStyles } from '../../theme/GlobalStyles';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Breadcrumbs>;

export const Basic: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs type="navigaion">
    <BreadcrumbItem text="Home"></BreadcrumbItem>
    <BreadcrumbItem text="Workspace"></BreadcrumbItem>
    <BreadcrumbItem text="Templates"></BreadcrumbItem>
    <BreadcrumbItem text="Template 1"></BreadcrumbItem>
  </Breadcrumbs>
);
