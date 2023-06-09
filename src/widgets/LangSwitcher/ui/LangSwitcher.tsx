import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';
import SwitchLangIcon from 'shared/assets/icons/language.svg';

interface LangSwitcherProps {
  className?: string;
  collapsed: boolean;
  title: string;
}

export const LangSwitcher = ({ className, collapsed, title }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <Button
      className={classNames(cls.langSwitcher, { [cls.langSwitcherCollapsed]: collapsed }, [className ?? ''])}
      theme={ButtonTheme.NORMAL}
      onClick={toggle}
      collapsed={collapsed}
      title={title}>
      <SwitchLangIcon />
      <span>{t('Translate')}</span>
    </Button>
  );
};
