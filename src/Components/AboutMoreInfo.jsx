import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const AboutMoreInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="more-info-container">
      <FontAwesomeIcon icon={faInfoCircle} />
      <div className="info">
        <p>{t("pets_allowed")}</p>
        <p>{t("no_smoking")}</p>
        <p>
         {t("no_parties")}
        </p>
      </div>
    </div>
  );
};

export default AboutMoreInfo;
