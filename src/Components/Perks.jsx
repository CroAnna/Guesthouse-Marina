import React from "react";
import { perksList } from "../Data/PerksList";
import BtnMoreDetails from "./BtnMoreDetails";

import IconInfoItem from "./IconInfoItem";

const Perks = () => {
  return (
    <div className="perks-container">
      {perksList.map((perk, index) => (
        <IconInfoItem item={perk} key={index} />
      ))}
    </div>
  );
};

export default Perks;
