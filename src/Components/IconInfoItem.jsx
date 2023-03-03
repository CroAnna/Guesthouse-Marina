import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconInfoItem = ({ item }) => {
  return (
    <div className="item">
      <div>
        <FontAwesomeIcon className="icon" icon={item.icon}></FontAwesomeIcon>
      </div>
      <div className="info">
        <p>{item.info}</p>
      </div>
    </div>
  );
};

export default IconInfoItem;
