import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, appLinkTheme } from "shared/ui/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.navlinks}>
        <AppLink to={"/"} className={cls.link} theme={appLinkTheme.PRIMARY}>
          Main Page
        </AppLink>
        <AppLink
          to={"/about"}
          className={cls.link}
          theme={appLinkTheme.PRIMARY}
        >
          About Page
        </AppLink>
      </div>
    </div>
  );
};
