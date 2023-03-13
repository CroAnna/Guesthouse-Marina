import React from "react";
import { useTranslation } from "react-i18next";

const AboutText = () => {
  const { t } = useTranslation();
  return (
    <div className="about-text">
      <p className="about-title">{t("app_2_2")}</p>
      <p>{t("about_text_1")}</p>
      <p>{t("about_text_2")}</p>
      <p>{t("about_text_3")}</p>
    </div>
  );
};

export default AboutText;
