import React from "react";
import { Link } from "react-router-dom";
import Info from "../Components/Info";

const Cjenik = () => {
  return (
    <div className="page cjenik">
      <table>
        <thead>
          <tr>
            <th>Broj gostiju</th>
            <th>Standardna cijena po nocenju *</th>
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
        <p>
          * Na rezervacije ostvarene putem ove web stranice odobrava se 10%
          popusta!
        </p>
      </div>
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
