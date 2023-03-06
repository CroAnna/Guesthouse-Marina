import React from "react";
import IconInfoItem from "./IconInfoItem";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faLongArrowAltRight,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  const infoList = [
    {
      icon: faMapMarkerAlt,
      info: "Adresa: Zamrsje 9, 47000 Karlovac, Hrvatska",
    },
    {
      icon: faPhoneAlt,
      info: "Telefon: +385 98 284 532",
    },
    {
      icon: faEnvelope,
      info: "E-mail: studioappmarina@gmail.com",
    },
    {
      icon: faLongArrowAltRight,
      info: "Check-in: 16:00-20:00",
    },
    {
      icon: faLongArrowAltLeft,
      info: "Check-out: do 11:00",
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
