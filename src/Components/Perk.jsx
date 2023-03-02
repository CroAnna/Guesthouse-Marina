import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Perk = ({ perk }) => {
  return (
    <div className="perk">
      <div>
        <FontAwesomeIcon className="icon" icon={perk.icon}></FontAwesomeIcon>
      </div>
      <div className="info">
        <p>{perk.info}</p>
      </div>
    </div>
  );
};

export default Perk;
