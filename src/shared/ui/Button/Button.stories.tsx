import { Button, ButtonSize, ButtonTheme } from './Button';
import { type Meta, type StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    theme: 'light'
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const NormalM = {
  args: {
    theme: ButtonTheme.NORMAL,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.M
  }
};
export const NormalDarkM = {
  args: {
    theme: ButtonTheme.NORMAL,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.M
  },
  parameters: {
    theme: 'dark'
  }
};

export const InvertedM: Story = {
  args: {
    theme: ButtonTheme.INVERTED,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.M
  }
};
export const InvertedDarkM: Story = {
  args: {
    theme: ButtonTheme.INVERTED,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.M
  },
  parameters: {
    theme: 'dark'
  }
};

export const ClearM = {
  args: {
    theme: ButtonTheme.CLEAR,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.M
  }
};
export const ClearDarkM = {
  args: {
    theme: ButtonTheme.CLEAR,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.M
  },
  parameters: {
    theme: 'dark'
  }
};

export const OutlineM: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.M
  }
};
export const OutlineDarkM: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.M
  },
  parameters: {
    theme: 'dark'
  }
};

export const NormalL = {
  args: {
    theme: ButtonTheme.NORMAL,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.L
  }
};
export const NormalDarkL = {
  args: {
    theme: ButtonTheme.NORMAL,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.L
  },
  parameters: {
    theme: 'dark'
  }
};

export const InvertedL: Story = {
  args: {
    theme: ButtonTheme.INVERTED,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.L
  }
};
export const InvertedDarkL: Story = {
  args: {
    theme: ButtonTheme.INVERTED,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.L
  },
  parameters: {
    theme: 'dark'
  }
};

export const ClearL = {
  args: {
    theme: ButtonTheme.CLEAR,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.L
  }
};
export const ClearDarkL = {
  args: {
    theme: ButtonTheme.CLEAR,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.L
  },
  parameters: {
    theme: 'dark'
  }
};

export const OutlineL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.L
  }
};
export const OutlineDarkL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.L
  },
  parameters: {
    theme: 'dark'
  }
};

export const NormalXL = {
  args: {
    theme: ButtonTheme.NORMAL,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.XL
  }
};
export const NormalDarkXL = {
  args: {
    theme: ButtonTheme.NORMAL,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.XL
  },
  parameters: {
    theme: 'dark'
  }
};

export const InvertedXL: Story = {
  args: {
    theme: ButtonTheme.INVERTED,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.XL
  }
};
export const InvertedDarkXL: Story = {
  args: {
    theme: ButtonTheme.INVERTED,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.XL
  },
  parameters: {
    theme: 'dark'
  }
};

export const ClearXL = {
  args: {
    theme: ButtonTheme.CLEAR,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.XL
  }
};
export const ClearDarkXL = {
  args: {
    theme: ButtonTheme.CLEAR,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.XL
  },
  parameters: {
    theme: 'dark'
  }
};

export const OutlineXL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.XL
  }
};
export const OutlineDarkXL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    collapsed: false,
    children: 'Text',
    className: 'button',
    size: ButtonSize.XL
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
