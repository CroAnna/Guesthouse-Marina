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
                <td>
                  <a href="https://www.karlovac.hr/grad/o-gradu-2728/2728">
                    Karlovac
                  </a>
                </td>
                <td>13 km</td>
              </tr>
              <tr>
                <td>
                  <a href="https://hr.wikipedia.org/wiki/Kupa"> Rijeka Kupa</a>
                </td>
                <td>600 m</td>
              </tr>
              <tr>
                <td>
                  <a href="https://aurora-experience.com/">Žitna lada</a>
                </td>
                <td>11 km</td>
              </tr>
              <tr>
                <td>
                  <a href="https://np-plitvicka-jezera.hr/">Plitvička jezera</a>
                </td>
                <td>94 km</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.aquariumkarlovac.com/">Aquatika - Slatkovodni akvarij</a>
                </td>
                <td>18 km</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.zagreb-airport.hr/">Zagreb Airport Franjo Tuđman</a>
                </td>
                <td>50 km</td>
              </tr>
              <tr>
                <td>
                 Autobusni kolodvor Karlovac
                </td>
                <td>15 km</td>
              </tr>
              <tr>
                <td>
                 Željeznički kolodvor Karlovac
                </td>
                <td>14 km</td>
              </tr>
              <tr>
                <td>
                  <a href="https://visitkarlovac.hr/stari-grad-dubovac/">Stari grad Dubovac</a>
                </td>
                <td>17 km</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="video-responsive">
          <iframe
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
