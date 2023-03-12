import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NavbarDesktop = () => {
  const { t } = useTranslation();
  return (
    <div className="navigation-desktop">
      <nav>
        <Link to="/">{t("home-nav")}</Link>
        <p>|</p>
        <Link to="/oapartmanu">{t("about_app-nav")}</Link>
        <p>|</p>
        <Link to="/cjenik">{t("pricelist-nav")}</Link>
        <p>|</p>
        <Link to="/omjestu">{t("about_place-nav")}</Link>
        <p>|</p>
        <Link to="/kontakt">{t("contact-nav")}</Link>
      </nav>
    </div>
  );
};

export default NavbarDesktop;
