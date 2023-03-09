import React from "react";
import { KarlovacAttractions } from "../Data/KarlovacAttractionsList";
import Attraction from "./Attraction";

const Karlovac = () => {
  return (
    <div className="karlovac-container">
      <div className="cover">
        <img src={require("../Images/Cover/zvijezda-cover.jpg")} alt="" />
        <div className="text-container move-up-middle">
          <p>
            Grad Karlovac, grad na 4 rijeke, grad parkova, zvijezda, piva,
            smješten između gorske i nizinske Hrvatske kroz koji prolaze 4
            rijeke - Kupa, Korana, Dobra i Mrežnica, udaljen je samo 13
            kilometara od idiličnog Zamršja.
          </p>
          <p>
            Nastao je 13. srpnja 1579. kao vojna utvrda zbog protuturske obrane,
            a zbog odličnog položaja ima važno prometno i gospodarsko značenje.
            Kroz povijest povezan cestama Karolinom, Jozefinom i Lujzijanom, a
            danas suvremenim prometnicama prema Europi.
          </p>
        </div>
      </div>
      <div className="attractions-container">
        {KarlovacAttractions.map((attraction, index) => (
          <Attraction attraction={attraction} key={index} />
        ))}
        <p className="more-info">
          Za sve dodatne informacije, predlažemo da posjetite{" "}
          <a href="Turistička zajednica karlovačke županije">
            Turističku zajednicu karlovačke županije
          </a>
          &nbsp; i&nbsp;
          <a href="https://visitkarlovac.hr/">
            Turističku zajednicu grada Karlovca
          </a>
          , a gastronomsku ponudu možete proučiti ovdje.
        </p>
      </div>
    </div>
  );
};

export default Karlovac;
