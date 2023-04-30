import './styles/index.scss';
import { Sidebar } from 'widgets/sidebar';
import { Suspense } from 'react';
import { classNames } from '../shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback='...'>
        <Navbar className='navbar' />

        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
        <div />
      </Suspense>
    </div>
  );
}

export default App;
