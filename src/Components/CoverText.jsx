import React from "react";
import { Link } from "react-router-dom";

const CoverText = () => {
  return (
    <div className="cover-text-container move-up-middle">
      <div className="main-name center-abs">Guest house Marina</div>
      <p>~ Kuća za odmor / Studio apartman ~</p>

      <Link to="/kontakt" className="center-abs ">
        <div className="center-abs rezerviraj">Rezerviraj odmah </div>
      </Link>
    </div>
  );
};

export default CoverText;
