import React from "react";
import { useTranslation } from "react-i18next";

const Zamrsje = () => {
  const { t } = useTranslation();
  return (
    <div className="zamrsje-container">
      <div className="cover">
        <img src={require("../Images/Locations/Zamrsje/cover.jpg")} alt="" />
        <div className="description">
          <p>{t("zamrsje_desc_1")}</p>
          <p>{t("zamrsje_desc_2")}</p>
          <p>{t("zamrsje_desc_3")}</p>
        </div>
      </div>
      <div className="images">
        <img src={require("../Images/Locations/Zamrsje/small1.jpg")} alt="" />
        <img src={require("../Images/Locations/Zamrsje/small2.jpg")} alt="" />
        <img src={require("../Images/Locations/Zamrsje/small3.jpg")} alt="" />
      </div>
      <div className="text">
        <p>{t("zamrsje_desc_4")}</p>
        <p>{t("zamrsje_desc_5")}</p>
      </div>
      <div className="split">
        <div className="left">
          <img
            src={require("../Images/Locations/Zamrsje/visibabe.jpg")}
            alt=""
          />
        </div>
        <div className="right">
          <div className="move-up-middle">
            <p>{t("zamrsje_desc_6")}</p>
            <p>{t("zamrsje_desc_7")}</p>
          </div>
        </div>
      </div>
      <div className="images">
        <img src={require("../Images/Locations/Zamrsje/kokosi.jpg")} alt="" />
        <img src={require("../Images/Locations/Zamrsje/grozde.jpg")} alt="" />
        <img src={require("../Images/Locations/Zamrsje/buce.jpg")} alt="" />
      </div>
      <div className="split kapela">
        <div className="right">
          <div className="move-up-middle">
            <p>{t("zamrsje_desc_8")}</p>
            <p>{t("zamrsje_desc_9")}</p>
          </div>
        </div>
        <div className="left ">
          <img src={require("../Images/Locations/Zamrsje/kapela.jpg")} alt="" />
        </div>
      </div>
      <div className="cover">
        <img src={require("../Images/Locations/Zamrsje/zalazak.jpg")} alt="" />
      </div>
    </div>
  );
};

export default Zamrsje;
