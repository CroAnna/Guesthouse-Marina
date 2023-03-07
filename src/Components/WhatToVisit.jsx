import React from "react";

const WhatToVisit = () => {
  return (
    <div className="what-to-visit-container">
      <p>Što posjetiti u blizini?</p>
      <div className="top-part">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Atrakcija</th>
                <th>Udaljenost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Karlovac</td>
                <td>13 km</td>
              </tr>
              <tr>
                <td>Rijeka Kupa</td>
                <td>600 m</td>
              </tr>
              <tr>
                <td>Zitna lada</td>
                <td>11 km</td>
              </tr>
              <tr>
                <td>Plitvicka jezera</td>
                <td>94 km</td>
              </tr>
              <tr>
                <td>Aquatika - Slatkovodni akvarij Karlovac</td>
                <td>18 km</td>
              </tr>
              <tr>
                <td>Zagreb Airport Franjo Tuđman</td>
                <td>50 km</td>
              </tr>
              <tr>
                <td>Autobusni kolodvor Karlovac</td>
                <td>15 km</td>
              </tr>
              <tr>
                <td>Zeljeznicki kolodvor Karlovac</td>
                <td>14 km</td>
              </tr>
              <tr>
                <td>Stari grad Dubovac</td>
                <td>17 km</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="video-responsive">
          <iframe
            width="820"
            height="430"
            src="https://www.youtube.com/embed/M_GdkGoeuY4"
            title="Karlovac - destinacijski video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WhatToVisit;
