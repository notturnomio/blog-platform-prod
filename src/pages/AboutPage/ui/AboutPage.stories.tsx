import { type Meta } from '@storybook/react';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
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
