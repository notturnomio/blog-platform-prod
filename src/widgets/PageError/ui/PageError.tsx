import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';
import ReloadButtonIcon from '../../../shared/assets/icons/reload.svg';

interface PageErrorProps {
  className?: string;
}

export const PageError: React.FC<PageErrorProps> = (props) => {
  const { t } = useTranslation('error');

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.pageError, {}, [])}>
      <h3 className={cls.message}>{t('Something went wrong')}</h3>
      <Button className={cls.button} onClick={reloadPage} theme={ButtonTheme.NORMAL}>
        <ReloadButtonIcon />
        {t('Reload the page')}
      </Button>
    </div>
  );
};
