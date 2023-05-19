import { type Meta } from '@storybook/react';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
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
