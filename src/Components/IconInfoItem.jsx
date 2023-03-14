import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";

const IconInfoItem = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="item">
      <div>
        <FontAwesomeIcon className="icon" icon={item.icon}></FontAwesomeIcon>
      </div>
      <div className="info">
        <p>{t(`${item.info}`)}</p>
      </div>
    </div>
  );
};

export default IconInfoItem;
