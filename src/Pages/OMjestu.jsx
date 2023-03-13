import React from "react";
import { useTranslation } from "react-i18next";
import Karlovac from "../Components/Karlovac";
import OtherLocations from "../Components/OtherLocations";
import Recica from "../Components/Recica";
import Zamrsje from "../Components/Zamrsje";

const OMjestu = () => {
  const { t } = useTranslation();
  return (
    <div className="page omjestu">
      <div className="title">
        <h1>{t("title_about")} - Zamršje</h1>
        <hr className="long" />
        <hr className="short" />
      </div>
      <Zamrsje />
      <div className="title">
        <hr className="short" />
        <h1>{t("title_about")} - Rečica</h1>
        <hr className="short" />
      </div>
      <Recica />
      <div className="title">
        <hr className="short" />
        <h1>{t("title_about")} - Karlovac</h1>
        <hr className="short" />
      </div>
      <Karlovac />
      <div className="title">
        <h1>{t("other_nearby")}</h1>
      </div>
      <OtherLocations />
    </div>
  );
};

export default OMjestu;
