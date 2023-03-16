import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { KarlovacAttractions } from "../Data/KarlovacAttractionsList";
import Attraction from "./Attraction";

const Karlovac = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { t } = useTranslation();
  return (
    <div className="karlovac-container">
      <div className="cover">
        <img src={require("../Images/Cover/zvijezda-cover.jpg")} alt="" />
        <div className="text-container move-up-middle" data-aos="fade-up-left">
          <p>{t("karlovac_desc_1")}</p>
          <p>{t("karlovac_desc_2")}</p>
        </div>
      </div>
      <div className="attractions-container">
        {KarlovacAttractions.map((attraction, index) => (
          <Attraction attraction={attraction} key={index} />
        ))}
        <p className="more-info">
          {t("for_more_info")}
          <a href="Turistička zajednica karlovačke županije">
            {t("tur_board_county")}
          </a>
          &nbsp; {t("and")}&nbsp;
          <a href="https://visitkarlovac.hr/">{t("tur_board_city")} </a>,
          {t("more_info_gastro")}.
        </p>
      </div>
    </div>
  );
};

export default Karlovac;
