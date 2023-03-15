import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MainInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="main-info-container">
      <div className="left">
        <Link to="/oapartmanu">
          <img
            src={require("../Images/house-photos-collage.png")}
            alt="collage"
          />
        </Link>
      </div>
      <div className="right">
        <div className="right-cloud">{t("welcome")}</div>
        <div>
          <p>{t("main_info_text_1")}</p>
          <p>{t("main_info_text_2")}</p>
          <p>{t("main_info_text_3")}</p>
          <p>{t("main_info_text_4")}</p>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
