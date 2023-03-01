import React from "react";
import { Link } from "react-router-dom";
import NavbarDesktop from "./Navbar-desktop";

const Header = () => {
  return (
    <div className="header">
      <div className="header-items">
        <Link to="/">
          {" "}
          <img src={require("../Images/logo_marina.png")} alt="logo-marina" />
        </Link>
        <NavbarDesktop />
      </div>
    </div>
  );
};

export default Header;
