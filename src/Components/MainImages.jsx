import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PhotoSlider from "./PhotoSlider";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MainImages = () => {
  return (
    <div className="main-images-container">
      <p>
        Kod opremanja objekta vodili smo se željom da vam boravak bude što
        <b>ugodniji</b> i baš po vašoj mjeri, a naša je obveza i dalje
        kontinuirano se <b>usavršavati i unaprjeđivati</b>.
      </p>
      <PhotoSlider />
      <Link to="/oapartmanu">
        <button>
          Pogledaj galeriju fotografija &nbsp;
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </button>
      </Link>
    </div>
  );
};

export default MainImages;
