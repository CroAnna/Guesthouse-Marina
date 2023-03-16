import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const BtnMoreDetails = ({ url }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { t } = useTranslation();
  return (
    <div className="btn-detalji-container" data-aos="slide-left">
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
