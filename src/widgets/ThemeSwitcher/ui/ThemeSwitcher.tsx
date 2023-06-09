import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import ThemeLightIcon from 'shared/assets/icons/sun.svg';
import ThemeDarkIcon from 'shared/assets/icons/moon.svg';
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
      {theme === Theme.DARK ? (
        <>
          <ThemeLightIcon />
          <span> {t('Light Theme')}</span>
        </>
      ) : (
        <>
          <ThemeDarkIcon /> <span>{t('Dark Theme')}</span>
        </>
      )}
    </Button>
  );
};
