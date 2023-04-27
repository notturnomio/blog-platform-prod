import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, appLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation("navbar");
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.navlinks}>
        <AppLink to={"/"} className={cls.link} theme={appLinkTheme.PRIMARY}>
          {t("Main")}
        </AppLink>
        <AppLink
          to={"/about"}
          className={cls.link}
          theme={appLinkTheme.PRIMARY}
        >
          {t("About Us")}
        </AppLink>
      </div>
    </div>
  );
};
