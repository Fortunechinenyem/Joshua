import { useTranslation } from "next-i18next";

const WelcomeMessage = () => {
  const { t } = useTranslation("common");
  return <h1>{t("welcome")}</h1>;
};

export default WelcomeMessage;
