/** @type { import('@storybook/react').Preview } */
import '../../src/app/styles/index.scss';
import { Theme } from '../../src/app/providers/ThemeProvider/';
import { BrowserRouter } from 'react-router-dom';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story, context) => {
      const theme = context.parameters.theme === 'light' ? Theme.LIGHT : Theme.DARK;
      return (
        <BrowserRouter>
          <div className={`app ${theme}`}>
            <Story />
          </div>
        </BrowserRouter>
      );
    }
  ]
};

export default preview;
