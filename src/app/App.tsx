import './styles/index.scss';
import { Sidebar } from 'widgets/Sidebar1';
import { Suspense } from 'react';
import { classNames } from '../shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import { PageLoader } from 'widgets/PageLoader';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
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
