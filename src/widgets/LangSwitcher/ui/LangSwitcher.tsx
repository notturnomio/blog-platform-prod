import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./LangSwitcher.module.scss";
import SwitchLangIcon from "shared/assets/icons/language.svg";

interface LangSwitcherProps {
  className?: string;
  collapsed?: boolean;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
  const { className, collapsed } = props;

  const { t, i18n } = useTranslation();
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };
  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      theme={ButtonTheme.NORMAL}
      onClick={toggle}
      collapsed={collapsed}
    >
      <SwitchLangIcon />
      <span>{t("Translate")}</span>
    </Button>
  );
};
