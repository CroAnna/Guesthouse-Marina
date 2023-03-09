import React from "react";
import { KarlovacAttractions } from "../Data/KarlovacAttractionsList";
import Attraction from "./Attraction";

const Karlovac = () => {
  return (
    <div className="karlovac-container">
      <div className="attractions-container">
        {KarlovacAttractions.map((attraction, index) => (
          <Attraction attraction={attraction} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Karlovac;
