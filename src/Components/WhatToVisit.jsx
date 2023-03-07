import React from "react";
import BtnMoreDetails from "./BtnMoreDetails";

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
                <td>Aquatika - Slatkovodni akvarij</td>
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
      <p className="description">
        Put do Karlovca moguć je automobilom, vlakom, autobusom i avionom.
        &nbsp;
        <b>Zračna luka Franjo Tuđman</b> udaljena je 50 km od objekta. Objekt je
        smješten uz prometnicu D36 kojom se može doći do Zagreba, glavnog grada
        Hrvatske, a u blizini objekta je izlaz i ulaz na autoput koji povezuje
        sve djelove Hrvatske, te su Karlovac i okolica idealno mjesto za odmor
        od dugog puta.
      </p>
      <p className="description">
        Grad Karlovac i okolica nude brojne događaje tijekom godine, posjete
        kulturnim i povijesnim znamenitostima, gastronomsku ponudu raznovrsnih
        restorana, prirodne ljepote ... (<b>Plitvička jezera</b>, Rastoke,&nbsp;
        <b>Aquarium Aquatika</b>, <b>Žitna lađa</b>...). Za više informacija što
        nudi Karlovac i okolica molimo pogledati na stranicama{" "}
        <a href="https://visitkarlovac.hr/">
          Turističke zajednice Grada Karlovca
        </a>
        &nbsp;i&nbsp;
        <a href="https://visitkarlovaccounty.hr/">
          Turističke zajednice Karlovačke županije
        </a>
        .
      </p>
      <BtnMoreDetails url={"/omjestu"} />
    </div>
  );
};

export default WhatToVisit;
