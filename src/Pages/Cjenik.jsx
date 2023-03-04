import React from "react";
import { Link } from "react-router-dom";
import Info from "../Components/Info";

const Cjenik = () => {
  return (
    <div className="page cjenik">
      <table>
        <tr>
          <th>Broj gostiju</th>
          <th>Standardna cijena po nocenju</th>
          <th>Popust 10% za placanje bez mogucnosti povrata</th>
        </tr>
        <tr>
          <td>1</td>
          <td>58,50 €</td>
          <td>52,65 €</td>
        </tr>
        <tr>
          <td>2</td>
          <td>65,00 €</td>
          <td>58,50 €</td>
        </tr>
        <tr>
          <td>3</td>
          <td>74,75 €</td>
          <td>67,28 €</td>
        </tr>
        <tr>
          <td>4</td>
          <td>78,00 €</td>
          <td>70,20 €</td>
        </tr>
      </table>
      <div className="text-info">
        <p>
          Cijena je za 1 noc, a u nju je ukljuceno sve sto apartman nudi, bez
          dodatnih troskova.
        </p>
        <p>
          Dolazak u kucu za odmor / studio apartman Marina je od 16:00 do 20:00,
          a odlazak od 8:00 do 11:00.
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
