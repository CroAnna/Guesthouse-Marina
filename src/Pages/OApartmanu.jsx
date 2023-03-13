import React from "react";
import { useTranslation } from "react-i18next";
import AboutImageSlider from "../Components/AboutImageSlider";
import AboutMoreInfo from "../Components/AboutMoreInfo";
import AboutText from "../Components/AboutText";
import ApartmentContent from "../Components/ApartmentContent";

const OApartmanu = () => {
  const { t } = useTranslation();
  return (
    <div className="page oapartmanu">
      <div className="title">
        <h1>{t("how_looks")}</h1>
        <hr className="short" />
      </div>
      <div className="about-container">
        <div className="about-top-container">
          <AboutText />
          <AboutImageSlider />
        </div>
        <ApartmentContent />
        <AboutMoreInfo />
      </div>
    </div>
  );
};

export default OApartmanu;
