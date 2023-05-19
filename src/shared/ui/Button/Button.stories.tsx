import { Button, ButtonTheme } from './Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    theme: 'light'
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Normal = {
  args: {
    theme: ButtonTheme.NORMAL,
    collapsed: false,
    children: 'Text',
    className: 'button'
  }
};
export const NormalDark = {
  args: {
    theme: ButtonTheme.NORMAL,
    collapsed: false,
    children: 'Text',
    className: 'button'
  },
  parameters: {
    theme: 'dark'
  }
};

export const Clear = {
  args: {
    theme: ButtonTheme.CLEAR,
    collapsed: false,
    children: 'Text',
    className: 'button'
  }
};
export const ClearDark = {
  args: {
    theme: ButtonTheme.CLEAR,
    collapsed: false,
    children: 'Text',
    className: 'button'
  },
  parameters: {
    theme: 'dark'
  }
};

export const Outline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    collapsed: false,
    children: 'Text',
    className: 'button'
  }
};

export const OutlineDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    collapsed: false,
    children: 'Text',
    className: 'button'
  },
  parameters: {
    theme: 'dark'
  }
  // decorators: [
  //   (Story) => {
  //     const theme = Theme.DARK;
  //     return (
  //       <div className={`app ${theme}`}>
  //         <Story />
  //       </div>
  //     );
  //   }
  // ]
};
