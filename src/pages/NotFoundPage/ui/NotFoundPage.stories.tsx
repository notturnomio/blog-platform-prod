import { type Meta } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
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
