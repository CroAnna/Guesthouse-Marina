import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { infoList } from "../Data/InfoList";
import IconInfoItem from "./IconInfoItem";

const Info = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { t } = useTranslation();
  return (
    <div className="info-container" data-aos="fade-up">
      {infoList.map((item, index) => (
        <IconInfoItem item={item} key={index} />
      ))}
      <p className="details">* {t("check_in_details")}</p>
    </div>
  );
};

export default Info;
