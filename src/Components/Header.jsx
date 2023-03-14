import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Header = () => {
  // TODO smanji ovo
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1050);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="header">
      <div className="header-items">
        {isDesktop ? (
          <div className="desktop">
            <NavbarDesktop />
          </div>
        ) : (
          <div className="mobile">
            <NavbarMobile />
          </div>
        )}
        <div className="image">
          <Link to="/">
            <img src={require("../Images/logo_marina.png")} alt="logo-marina" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
