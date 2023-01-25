// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/ThemeProvider';
import { GlobalStyles } from '../../theme/GlobalStyles';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);
