import React from "react";
import { useTranslation } from "react-i18next";
import { infoList } from "../Data/InfoList";
import IconInfoItem from "./IconInfoItem";

const Info = () => {
  const { t } = useTranslation();
  return (
    <div className="info-container">
      {infoList.map((item, index) => (
        <IconInfoItem item={item} key={index} />
      ))}
      <p>* {t("check_in_details")}</p>
    </div>
  );
};

export default Info;
