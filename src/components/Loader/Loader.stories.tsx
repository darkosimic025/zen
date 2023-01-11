// Button.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from './Loader';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/ThemeProvider';

export default {
  title: 'Loader',
  component: Loader,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Loader>;

export const Basic: ComponentStory<typeof Loader> = (args) => (
  <Loader {...args}></Loader>
);
