import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import BtnMoreDetails from "./BtnMoreDetails";

const WhatToVisit = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { t } = useTranslation();
  return (
    <div className="what-to-visit-container">
      <p>{t("what_to_visit_nearby")}</p>
      <div className="top-part">
        <div className="table" data-aos="fade-right">
          <table>
            <thead>
              <tr>
                <th>{t("attraction")}</th>
                <th>{t("distance")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="https://www.karlovac.hr/grad/o-gradu-2728/2728">
                    Karlovac
                  </a>
                </td>
                <td>13 km</td>
              </tr>
              <tr>
                <td>
                  <a href="https://hr.wikipedia.org/wiki/Kupa">
                    {t("river_kupa")}
                  </a>
                </td>
                <td>600 m</td>
              </tr>
              <tr>
                <td>
                  <a href="https://aurora-experience.com/">{t("grain_boat")}</a>
                </td>
                <td>11 km</td>
              </tr>
              <tr>
                <td>
                  <a href="https://np-plitvicka-jezera.hr/">
                    {t("plitvice_lakes")}
                  </a>
                </td>
                <td>94 km</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.aquariumkarlovac.com/">
                    {t("aquatika")}
                  </a>
                </td>
                <td>18 km</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.zagreb-airport.hr/">
                    {t("zagreb_airport")}
                  </a>
                </td>
                <td>50 km</td>
              </tr>
              <tr>
                <td>{t("ak_karlovac")}</td>
                <td>15 km</td>
              </tr>
              <tr>
                <td>{t("train_station_karlovac")}</td>
                <td>14 km</td>
              </tr>
              <tr>
                <td>
                  <a href="https://visitkarlovac.hr/stari-grad-dubovac/">
                    {t("old_town_dubovac")}
                  </a>
                </td>
                <td>17 km</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="video-responsive" data-aos="fade-left">
          <iframe
            src="https://www.youtube.com/embed/M_GdkGoeuY4"
            title="Karlovac - destinacijski video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <p className="description" data-aos="fade-up">
        {t("what_to_visit_opis_1")}
        <b>{t("zagreb_airport")}</b>
        {t("what_to_visit_opis_2")}
      </p>
      <p className="description" data-aos="fade-up">
        {t("what_to_visit_opis_3")} (<b>{t("plitvice_lakes")}</b>,
        Rastoke,&nbsp;
        <b>{t("aquatika")}</b>, <b>{t("grain_boat")}</b>...).
        {t("for_more_info")}
        <a href="https://visitkarlovac.hr/">{t("tur_board_city")} </a>
        &nbsp;{t("and")}&nbsp;
        <a href="https://visitkarlovaccounty.hr/">{t("tur_board_county")}</a>.
      </p>
      <BtnMoreDetails url={"/omjestu"} />
    </div>
  );
};

export default WhatToVisit;
