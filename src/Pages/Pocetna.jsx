import React from "react";
import MainImages from "../Components/MainImages";
import MainInfo from "../Components/MainInfo";
import Perks from "../Components/Perks";

const Pocetna = () => {
  return (
    <div className="page pocetna">
      <MainInfo />
      <Perks />
      <MainImages />
    </div>
  );
};

export default Pocetna;
