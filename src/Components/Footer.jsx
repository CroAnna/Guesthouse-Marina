import React from "react";
import FooterBox from "./FooterBox";

const Footer = () => {
  const footerBoxes = [
    {
      title: "Korisni linkovi",
      data: [
        {
          name: "Vremenska prognoza",
          url: "https://www.accuweather.com/hr/hr/zamrsje/118687/weather-forecast/118687",
        },
        {
          name: "Turistička zajednica grada Karlovca",
          url: "https://visitkarlovac.hr/",
        },
        {
          name: "Turistička zajednica karlovačke županije",
          url: "https://visitkarlovaccounty.hr/",
        },
        {
          name: "Turistička zajednica grada Karlovca",
          url: "https://visitkarlovac.hr/",
        },
      ],
    },
    {
      title: "Društvene mreže",
      data: [
        { name: "Booking", url: "https://www.google.com/" },
        { name: "Facebook", url: "https://www.google.com/" },
      ],
    },
    {
      title: "Kontaktirajte nas",
      data: [
        { name: "Zamrsje 9", url: "/kontakt" },
        { name: "47000 Karlovac, Croatia", url: "/kontakt" },
        { name: "Telephone: +385 91 123 456,", url: "/kontakt" },
        { name: "E-mail: mail@gmail.com", url: "/kontakt" },
      ],
    },
  ];
  return (
    <div className="footer-container">
      <div className="footer-boxes">
        {footerBoxes.map((box, index) => (
          <FooterBox box={box} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
