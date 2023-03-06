import React, { useState } from "react";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  const [openNav, setOpenNav] = useState(false);
  const navHandler = () => {
    setOpenNav(!openNav);
  };
  const closeNav = () => {
    setOpenNav(false);
  };

  return (
    <div className="navigation-mobile">
      <div className="icons">
        <FontAwesomeIcon
          icon={faBars}
          onClick={navHandler}
          className={openNav ? "hidden" : "iconBar fixed"}
        />
        <FontAwesomeIcon
          icon={faX}
          onClick={navHandler}
          className={openNav ? "iconBar abs" : "hidden"}
        />
      </div>
      <div>
        <nav className={openNav ? "nav-bar" : "hidden "} onClick={closeNav}>
          <Link to="/">Početna</Link>
          <Link to="/oapartmanu">O apartmanu</Link>
          <Link to="/cjenik">Cjenik</Link>
          <Link to="/omjestu">O mjestu</Link>
          <Link to="/kontakt">Kontakt</Link>
        </nav>
      </div>
    </div>
  );
};

export default NavbarMobile;
