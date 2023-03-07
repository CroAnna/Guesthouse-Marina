import React from "react";
import Cover from "../Components/Cover";
import MainImages from "../Components/MainImages";
import MainInfo from "../Components/MainInfo";
import Perks from "../Components/Perks";

const Pocetna = () => {
  return (
    <div className="page pocetna">
      <Cover />
      <MainInfo />
      <Perks />
      <MainImages />
    </div>
  );
};

export default Pocetna;
