import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const AboutText = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { t } = useTranslation();
  return (
    <div className="about-text" data-aos="fade-right">
      <p className="about-title">{t("app_2_2")}</p>
      <p>{t("about_text_1")}</p>
      <p>{t("about_text_2")}</p>
      <p>{t("about_text_3")}</p>
    </div>
  );
};

export default AboutText;
