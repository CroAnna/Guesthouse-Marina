import React from "react";
import MainImages from "../Components/Main-images";
import MainInfo from "../Components/Main-info";
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
