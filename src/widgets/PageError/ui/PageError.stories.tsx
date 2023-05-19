import { type Meta } from '@storybook/react';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,
  args: {},
  parameters: {
    theme: 'light'
  }
};

export default meta;

// type Story = StoryObj<typeof Navbar>;

export const Light = {
  args: {}
};

export const Dark = {
  args: {},
  parameters: {
    theme: 'dark'
  }
};
