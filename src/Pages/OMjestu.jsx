import React from "react";
import Karlovac from "../Components/Karlovac";
import OtherLocations from "../Components/OtherLocations";
import Recica from "../Components/Recica";
import Zamrsje from "../Components/Zamrsje";

const OMjestu = () => {
  return (
    <div className="page omjestu">
      <div className="title">
        <h1>O mjestu - Zamršje</h1>
        <hr className="long" />
        <hr className="short" />
      </div>
      <Zamrsje />
      <div className="title">
        <hr className="short" />
        <h1>O mjestu - Rečica</h1>
        <hr className="short" />
      </div>
      <Recica />
      <div className="title">
        <hr className="short" />
        <h1>O mjestu - Karlovac</h1>
        <hr className="short" />
      </div>
      <Karlovac />
      <div className="title">
        <h1>Ostale lokacije u blizini</h1>
      </div>
      <OtherLocations />
    </div>
  );
};

export default OMjestu;
