import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CoverText = () => {
  const { t } = useTranslation();
  return (
    <div className="cover-text-container move-up-middle">
      <div className="main-name center-abs">Guest house Marina</div>
      <p>~{t("holiday_house_studio")}~</p>

      <Link to="/kontakt" className="center-abs ">
        <div className="center-abs rezerviraj"> {t("reserve_now")}</div>
      </Link>
    </div>
  );
};

export default CoverText;
