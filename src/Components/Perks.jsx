import React from "react";
import {
  faUpRightAndDownLeftFromCenter,
  faWifi,
  faDog,
  faTree,
  faParking,
} from "@fortawesome/free-solid-svg-icons";
import IconInfoItem from "./IconInfoItem";

const Perks = () => {
  const perksList = [
    {
      icon: faUpRightAndDownLeftFromCenter,
      info: "56 m^2",
    },
    {
      icon: faWifi,
      info: "besplatan Wi-Fi",
    },
    {
      icon: faParking,
      info: "besplatan parking",
    },
    {
      icon: faTree,
      info: "priroda",
    },
    {
      icon: faDog,
      info: "dozvoljeni ljubimci",
    },
  ];
  return (
    <div className="perks-container">
      {perksList.map((perk, index) => (
        <IconInfoItem item={perk} key={index} />
      ))}
    </div>
  );
};

export default Perks;