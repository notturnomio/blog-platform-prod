import { type Meta } from '@storybook/react';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
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
