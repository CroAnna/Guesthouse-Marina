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
      <h3 className="title">
        Od/from 10.4.2024. do/to 31.5.2024. Od/from 1.10.2024. do/to 31.12.2024.
        :
      </h3>
      <PriceTable
        price1={"60,00 €"}
        price2={"75,00 €"}
        price3={"90,00 €"}
        price4={"105,00 €"}
        price5={"65,00 €"}
        price6={"85,00 €"}
        price7={"105,00 €"}
        price8={"125,00 €"}
      />

      <h3 className="title">Od/from 1.6.2024. do/to 30.9.2024. :</h3>
      <PriceTable
        price1={"70,00 €"}
        price2={"85,00 €"}
        price3={"100,00 €"}
        price4={"115,00 €"}
        price5={"75,00 €"}
        price6={"95,00 €"}
        price7={"115,00 €"}
        price8={"135,00 €"}
      />

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
