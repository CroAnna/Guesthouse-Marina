import React from "react";
import { Link } from "react-router-dom";
import Info from "../Components/Info";
import PriceTable from "../Components/PriceTable";

const Cjenik = () => {
  return (
    <div className="page cjenik">
      <div className="title">
        <h1>Cjenik</h1>
        <hr className="short" />
      </div>
      <PriceTable />
      <div className="text-info">
        <p>
          Cijena je za 1 noc, a u nju je ukljuceno sve sto apartman nudi, bez
          dodatnih troskova.
        </p>
        <p>
          Dolazak u kucu za odmor / studio apartman Marina je od 16:00 do 20:00,
          a odlazak do 11:00.
        </p>
        <p>Akontacija je cijena jednog noćenja.</p>
        <p>
          Otkaz rezervacije do 7 dana prije dolaska - povrat predujma (umanjen
          za troškove prijenosa).
        </p>
        <p>
          Kasnije otkazivanje rezervacije - nema povrata predujma, ali će biti
          uključen u Vašu sljedeću rezervaciju u Guest house Marina.
        </p>
        <p>
          Za sve potencijalne nejasnoce i nedoumice molimo da nas&nbsp;
          <Link to="/kontakt">kontaktirate</Link>.
        </p>
      </div>
      <Info />
    </div>
  );
};

export default Cjenik;
