import React from "react";
import { useTranslation } from "react-i18next";

const Recica = () => {
  const { t } = useTranslation();
  return (
    <div className="recica-container">
      <div className="top-part">
        <div className="split-divs">
          <div className="old">
            <div className="color-overlay">
              <img
                src={require("../Images/Locations/Recica/stara.jpg")}
                alt=""
              />
              <div className="text-over move-up-middle center-abs">
                <p>{t("recica_desc_1")}</p>
                <p>{t("recica_desc_2")}</p>
              </div>
            </div>
          </div>
          <div className="new">
            <img
              src={require("../Images/Locations/Recica/nosnja.jpg")}
              alt=""
            />
            <img src={require("../Images/Locations/Recica/crkva.jpg")} alt="" />
          </div>
        </div>
      </div>
      <div className="bottom-part">
        <div className="split">
          <div className="left">
            <img
              src={require("../Images/Locations/Recica/nosnje.jpg")}
              alt=""
            />
          </div>
          <div className="right">
            <div className="move-up-middle">
              <p>{t("recica_desc_3")}</p>
              <p>{t("recica_desc_4")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recica;
