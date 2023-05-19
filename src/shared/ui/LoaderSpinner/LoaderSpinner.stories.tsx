import { type Meta } from '@storybook/react';
import { LoaderSpinner } from './LoaderSpinner';

const meta: Meta<typeof LoaderSpinner> = {
  title: 'shared/LoaderSpinner',
  component: LoaderSpinner,
  args: {}
};

export default meta;

// type Story = StoryObj<typeof Navbar>;

export const Light = {
  args: {},
  parameters: {
    theme: 'light'
  }
};

export const Dark = {
  args: {},
  parameters: {
    theme: 'dark'
  }
};
