import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { Sidebar } from './Sidebar';

// jest.mock('react-i18next', () => ({
//   useTranslation: () => ({ t: (key: string) => key })
// }));

describe('Sidebar', () => {
  test('render Sidebar', () => {
    renderComponent(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle Sidebar', () => {
    renderComponent(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    const toggleButton = screen.getByTestId('sidebar-toggle');

    expect(sidebar).not.toHaveClass('collapsed');
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('collapsed');
    fireEvent.click(toggleButton);
    expect(sidebar).not.toHaveClass('collapsed');
  });
});
