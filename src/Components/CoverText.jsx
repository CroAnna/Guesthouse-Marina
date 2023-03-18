import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CoverText = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { t } = useTranslation();
  return (
    <div className="cover-text-container ">
      <p data-aos="fade-right">{t("holiday_house_studio_2")}</p>
      <div className="main-name center-abs" data-aos="fade-right">
        Guest house Marina
      </div>
      <p data-aos="fade-right">~{t("holiday_house_studio")}~</p>

      <Link to="/kontakt" className="center-abs">
        <div
          className="center-abs rezerviraj"
          data-aos="flip-up"
          data-aos-delay="700"
          data-aos-anchor="center-center"
        >
          {t("reserve_now")}
        </div>
      </Link>
    </div>
  );
};

export default CoverText;
