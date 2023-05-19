import { type Meta } from '@storybook/react';
import { AppLink, appLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: { to: '/', className: 'appLink', children: 'link button' },
  parameters: {
    theme: 'light'
  }
};

export default meta;

// type Story = StoryObj<typeof Navbar>;

export const Primary = {
  args: { theme: appLinkTheme.PRIMARY, to: '/' }
};

export const PrimaryDark = {
  args: { theme: appLinkTheme.PRIMARY, to: '/' },
  parameters: {
    theme: 'dark'
  }
};

export const Secondary = {
  args: { theme: appLinkTheme.SECONDARY }
};

export const SecondaryDark = {
  args: { theme: appLinkTheme.SECONDARY },
  parameters: {
    theme: 'dark'
  }
};
