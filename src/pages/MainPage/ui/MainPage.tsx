import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");
  return <h2>{t("Main")}</h2>;
};

export default MainPage;
