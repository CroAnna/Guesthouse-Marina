import React from "react";
import IconInfoItem from "./IconInfoItem";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  const infoList = [
    {
      icon: faMapMarkerAlt,
      info: "Adresa: Zamrsje 9, 47000 Karlovac, Hrvatska",
    },
    {
      icon: faPhoneAlt,
      info: "Telefon: +385 91 123 456",
    },
    {
      icon: faEnvelope,
      info: "E-mail: mail@gmail.com",
    },
    {
      icon: faLongArrowAltRight,
      info: "Check-in: 16:00-20:00",
    },
  ];
  return (
    <div className="info-container">
      {infoList.map((item, index) => (
        <IconInfoItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Info;
