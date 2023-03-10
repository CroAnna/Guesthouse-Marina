import React from "react";
import BtnMoreDetails from "../Components/BtnMoreDetails";
import Cover from "../Components/Cover";
import MainImages from "../Components/MainImages";
import MainInfo from "../Components/MainInfo";
import Map from "../Components/Map";
import Perks from "../Components/Perks";
import WhatToVisit from "../Components/WhatToVisit";

const Pocetna = () => {
  return (
    <div className="page pocetna">
      <Cover />
      <MainInfo />
      <Perks />
      <BtnMoreDetails url={"/oapartmanu"} />
      <MainImages />
      <WhatToVisit />
      <Map />
    </div>
  );
};

export default Pocetna;
