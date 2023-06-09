import { type Meta } from '@storybook/react';
import { Sidebar } from './Sidebar';
import cls from './Sidebar.module.scss';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  args: {},
  parameters: {
    theme: 'light'
  }
};

export default meta;

export const Light = {
  args: {}
};

export const Dark = {
  args: {},
  parameters: {
    theme: 'dark'
  }
};

// type Story = StoryObj<typeof Sidebar>;

export const LightCollapsed = {
  args: { className: cls.collapsed, collapsed: true },
  parameters: {
    collapsed: true
  }
};

export const DarkCollapsed = {
  args: { className: cls.collapsed, collapsed: true },
  parameters: {
    theme: 'dark',
    collapsed: true
  }
};
