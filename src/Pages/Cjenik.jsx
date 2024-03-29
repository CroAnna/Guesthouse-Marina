import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Info from "../Components/Info";
import PriceTable from "../Components/PriceTable";

const Cjenik = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { t } = useTranslation();
  return (
    <div className="page cjenik">
      <div className="title">
        <h1>{t("pricelist-nav")}</h1>
        <hr className="short" />
      </div>
      <PriceTable />
      <div className="text-info" data-aos="fade-left">
        <p>{t("pricelist_info_1")}</p>
        <p>
          {t("pricelist_info_2")} {t("check_in_details")}
        </p>
        <p>{t("pricelist_info_3")}</p>
        <p>{t("pricelist_info_4")}</p>
        <p>{t("pricelist_info_5")}</p>
        <p>
          {t("pricelist_info_6")}
          &nbsp;
          <Link to="/kontakt">{t("pricelist_info_7")}</Link>.
        </p>
      </div>
      <Info />
    </div>
  );
};

export default Cjenik;
