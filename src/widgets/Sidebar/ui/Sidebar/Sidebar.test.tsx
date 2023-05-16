import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

// jest.mock('react-i18next', () => ({
//   useTranslation: () => ({ t: (key: string) => key })
// }));

describe('Sidebar', () => {
  test('render Sidebar', () => {
    renderWithTranslation(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle Sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    const toggleButton = screen.getByTestId('sidebar-toggle');

    expect(sidebar).not.toHaveClass('collapsed');
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('collapsed');
    fireEvent.click(toggleButton);
    expect(sidebar).not.toHaveClass('collapsed');
  });
});
