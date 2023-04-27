import { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher/ui/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Sidebar.module.scss";
import SidebarOpenMenuIcon from "/src/shared/assets/icons/menu-staggered.svg";
import SidebarCloseMenuIcon from "shared/assets/icons/circle-xmark.svg";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        className={classNames(cls.toggleButton, {}, [])}
        onClick={onToggle}
        theme={ButtonTheme.NORMAL}
        collapsed={collapsed}
      >
        {collapsed ? <SidebarOpenMenuIcon /> : <SidebarCloseMenuIcon />}
        <span>{t("Hide menu")}</span>
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher collapsed={collapsed} />
        <LangSwitcher collapsed={collapsed} />
      </div>
    </div>
  );
};
