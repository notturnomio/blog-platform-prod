import { BugButton } from 'app/providers/ErrorBoundary';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: React.FC = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      <h2>{t('Main')}</h2>
      <BugButton />
    </div>
  );
};

export default MainPage;
