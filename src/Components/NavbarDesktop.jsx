import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const NavbarDesktop = () => {
  const { t } = useTranslation();

  return (
    <div className="navigation-desktop">
      <nav>
        <NavLink to="/" exact activeClassName="active">
          {t("home-nav")}
        </NavLink>
        <p>|</p>
        <NavLink to="/oapartmanu" activeClassName="active">
          {t("about_app-nav")}
        </NavLink>
        <p>|</p>
        <NavLink to="/cjenik" activeClassName="active">
          {t("pricelist-nav")}
        </NavLink>
        <p>|</p>
        <NavLink to="/omjestu" activeClassName="active">
          {t("about_place-nav")}
        </NavLink>
        <p>|</p>
        <NavLink to="/kontakt" activeClassName="active">
          {t("contact-nav")}
        </NavLink>
      </nav>
    </div>
  );
};

export default NavbarDesktop;
