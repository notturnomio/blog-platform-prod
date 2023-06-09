import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import SwitchThemeIcon from 'shared/assets/icons/switch-theme.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface ThemeSwitcherProps {
  className?: string;
  collapsed: boolean;
  title: string;
}

export const ThemeSwitcher = ({ className, collapsed, title }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <Button
      theme={ButtonTheme.NORMAL}
      className={classNames(cls.themeSwitcher, { [cls.themeSwitcherCollapsed]: collapsed }, [className ?? ''])}
      onClick={toggleTheme}
      collapsed={collapsed}
      title={title}>
      <SwitchThemeIcon />
      <span>{theme === Theme.DARK ? t('Light Theme') : t('Dark Theme')}</span>
    </Button>
  );
};
