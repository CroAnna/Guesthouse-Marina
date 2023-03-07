import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const BtnMoreDetails = ({url}) => {
  return (
    <div className="btn-detalji-container">
      <Link to={url}>
        <button className="btnDetalji">
          <FontAwesomeIcon icon={faPlus} />
          &nbsp;Više detalja
        </button>
      </Link>
    </div>
  );
};

export default BtnMoreDetails;
