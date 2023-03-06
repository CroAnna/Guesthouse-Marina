import React from "react";
import { Link } from "react-router-dom";

const NavbarDesktop = () => {
  return (
    <div className="navigation-desktop">
      <nav>
        <Link to="/">Početna</Link>
        <p>|</p>
        <Link to="/oapartmanu">O apartmanu</Link>
        <p>|</p>
        <Link to="/cjenik">Cjenik</Link>
        <p>|</p>
        <Link to="/omjestu">O mjestu</Link>
        <p>|</p>
        <Link to="/kontakt">Kontakt</Link>
      </nav>
    </div>
  );
};

export default NavbarDesktop;
