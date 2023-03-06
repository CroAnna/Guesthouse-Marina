import React from "react";

const PriceTable = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

export default PriceTable;
