import React, { useState } from "react";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavbarMobile = () => {
  const { t } = useTranslation();
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
          <Link to="/">{t("home-nav")}</Link>
          <Link to="/oapartmanu">{t("about_app-nav")}</Link>
          <Link to="/cjenik">{t("pricelist-nav")}</Link>
          <Link to="/omjestu">{t("about_place-nav")}</Link>
          <Link to="/kontakt">{t("contact-nav")}</Link>
        </nav>
      </div>
    </div>
  );
};

export default NavbarMobile;
