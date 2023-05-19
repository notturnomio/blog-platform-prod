import { type Meta } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  args: {},
  parameters: {
    theme: 'light'
  }
};

export default meta;

// type Story = StoryObj<typeof Navbar>;

export const NormalLight = {
  args: {}
};

export const NormalDark = {
  args: {},
  parameters: {
    theme: 'dark'
  }
};

export const CollapsedLight = {
  args: { collapsed: true }
};

export const CollapsedDark = {
  args: { collapsed: true },
  parameters: {
    theme: 'dark'
  }
};
