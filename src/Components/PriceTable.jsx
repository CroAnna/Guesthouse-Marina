import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const PriceTable = ({
  price1,
  price2,
  price3,
  price4,
  price5,
  price6,
  price7,
  price8,
}) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { t } = useTranslation();
  return (
    <div data-aos="fade-right" className="price-table-container">
      <table>
        <thead>
          <tr>
            <th>{t("number_of_guests")}</th>
            <th>{t("price_per_night")} *</th>
            <th>{t("price_per_night_w_breakfast")} *</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{price1}</td>
            <td>{price5}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{price2}</td>
            <td>{price6}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{price3}</td>
            <td>{price7}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{price4}</td>
            <td>{price8}</td>
          </tr>
        </tbody>
      </table>
      <div className="popust">
        <p>* {t("discount")}</p>
      </div>
    </div>
  );
};

export default PriceTable;
