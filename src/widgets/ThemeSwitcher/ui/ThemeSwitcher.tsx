import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import SwitchThemeIcon from 'shared/assets/icons/switch-theme.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import React from 'react';

interface ThemeSwitcherProps {
  className?: string;
  collapsed?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { className, collapsed } = props;

  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <Button
      theme={ButtonTheme.NORMAL}
      className={classNames(className ?? '', {}, [cls.themeSwitcher])}
      onClick={toggleTheme}
      collapsed={collapsed}>
      <SwitchThemeIcon />
      <span>{theme === Theme.DARK ? t('Light Theme') : t('Dark Theme')}</span>
    </Button>
  );
};
