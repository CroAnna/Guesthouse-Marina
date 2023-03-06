import React from "react";
import FooterBox from "./FooterBox";
import { footerBoxes } from "../Data/FooterBoxes";

const Footer = () => {
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
