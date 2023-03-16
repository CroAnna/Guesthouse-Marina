import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const OtherLocations = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { t } = useTranslation();
  return (
    <div className="other-container">
      <div className="location ">
        <img src={require("../Images/Locations/Other/plitvice.jpg")} alt="" />
        <div className="description right" data-aos="fade-up-left">
          <h2>{t("plitvice_lakes")}</h2>
          <p>{t("plitvice_desc")}</p>
        </div>
      </div>
      <div className="location zg">
        <img src={require("../Images/Locations/Other/zagreb.jpg")} alt="" />
        <div className="description center-abs" data-aos="fade-up-left">
          <h2>Zagreb</h2>
          <p>{t("zagreb_desc")}</p>
        </div>
      </div>
      <div className="location">
        <img src={require("../Images/Locations/Other/adriatic.jpg")} alt="" />
        <div className="description center-abs jad" data-aos="fade-up-left">
          <h2>{t("adriatic_title")}</h2>
          <p>{t("adriatic_desc")}</p>
        </div>
      </div>
      <div className="gastro">
        <h2>{t("gastronomy")}</h2>
        <div className="gastro-content" data-aos="fade-up">
          <div className="gastro-left">
            <div className="left">
              <img
                src={require("../Images/Locations/Other/gastro.jpg")}
                alt=""
              />
              <p className="move-up-middle down">Fotografija je preuzeta</p>
            </div>
            <div className="right">
              <div className="move-up-middle text">
                <p>{t("gastro_desc_1")}</p>
                <p>{t("gastro_desc_2")}</p>
              </div>
            </div>
          </div>
          <div className="gastro-right">
            <img
              className="move-up-middle"
              src={require("../Images/Locations/Other/qr-gastronomija.png")}
              alt=""
            />
            <p>{t("more_qr")}</p>
          </div>
        </div>
      </div>
      <div className="bottom-sentence" data-aos="fade-up-left">
        <p>{t("relax_desc")}</p>
      </div>
    </div>
  );
};

export default OtherLocations;
