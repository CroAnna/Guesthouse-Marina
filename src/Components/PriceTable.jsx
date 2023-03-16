import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const PriceTable = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { t } = useTranslation();
  return (
    <div data-aos="fade-right">
      <table>
        <thead>
          <tr>
            <th>{t("number_of_guests")}</th>
            <th>{t("price_per_night")} *</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>58,00 €</td>
          </tr>
          <tr>
            <td>2</td>
            <td>65,00 €</td>
          </tr>
          <tr>
            <td>3</td>
            <td>75,00 €</td>
          </tr>
          <tr>
            <td>4</td>
            <td>78,00 €</td>
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
