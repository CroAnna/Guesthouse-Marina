import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { perksList } from "../Data/PerksList";
import IconInfoItem from "./IconInfoItem";

const Perks = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="perks-container"
      data-aos="fade-up"
    >
      {perksList.map((perk, index) => (
        <IconInfoItem item={perk} key={index} />
      ))}
    </div>
  );
};

export default Perks;
