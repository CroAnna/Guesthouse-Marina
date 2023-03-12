import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const BtnMoreDetails = ({ url }) => {
  const { t } = useTranslation();
  return (
    <div className="btn-detalji-container">
      <Link to={url}>
        <button className="btnDetalji">
          <FontAwesomeIcon icon={faPlus} />
          &nbsp;{t("more_details")}
        </button>
      </Link>
    </div>
  );
};

export default BtnMoreDetails;
