import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import SidebarOpenMenuIcon from 'shared/assets/icons/menu-staggered.svg';
import SidebarCloseMenuIcon from 'shared/assets/icons/circle-xmark.svg';
import HomeNavIcon from 'shared/assets/icons/home.svg';
import AboutNavIcon from 'shared/assets/icons/info.svg';
import { AppLink, appLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/router/RouteConfig/routeConfig';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation('navbar');

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className ?? ''])} data-testid='sidebar'>
      <Button
        data-testid='sidebar-toggle'
        className={classNames(cls.toggleButton, { [cls.toggleButtonCollapsed]: collapsed }, [])}
        onClick={onToggle}
        theme={ButtonTheme.NORMAL}
        collapsed={collapsed}
        title='Toggle Sidebar'>
        {collapsed ? <SidebarOpenMenuIcon /> : <SidebarCloseMenuIcon />}
        <span>{t('Hide menu')}</span>
      </Button>
      <div className={cls.navlinks}>
        <AppLink
          to={RoutePath.main}
          className={classNames(cls.link, { [cls.navLinkCollapsed]: collapsed }, [])}
          theme={appLinkTheme.PRIMARY}
          title='Home'>
          <HomeNavIcon className={cls.navIcon} />
          <span className={cls.navName}>{t('Main')}</span>
        </AppLink>
        <AppLink
          to={RoutePath.about}
          className={classNames(cls.link, { [cls.navLinkCollapsed]: collapsed }, [])}
          theme={appLinkTheme.PRIMARY}
          title='About Us'>
          <AboutNavIcon className={cls.navIcon} />
          <span className={cls.navName}>{t('About Us')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher collapsed={collapsed} title='Toggle Theme' />
        <LangSwitcher collapsed={collapsed} title='Change Language' />
      </div>
    </div>
  );
};
