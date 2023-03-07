import React from "react";
import Cover from "../Components/Cover";
import MainImages from "../Components/MainImages";
import MainInfo from "../Components/MainInfo";
import Perks from "../Components/Perks";
import WhatToVisit from "../Components/WhatToVisit";

const Pocetna = () => {
  return (
    <div className="page pocetna">
      <Cover />
      <MainInfo />
      <Perks />
      <MainImages />
      <WhatToVisit />
    </div>
  );
};

export default Pocetna;
