import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, appLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = (props) => {
  const { t } = useTranslation('notFound');

  return (
    <div className={cls.notFoundPage}>
      <h2>{t('Error 404 - Page Not Found')}</h2>
      <div>
        <AppLink to={'/'} className={cls.link} theme={appLinkTheme.PRIMARY}>
          {t('Return To Main Page')}
        </AppLink>
      </div>
    </div>
  );
};
