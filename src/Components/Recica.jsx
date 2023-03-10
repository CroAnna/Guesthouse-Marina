import React from "react";

const Recica = () => {
  return (
    <div className="recica-container">
      <div className="top-part">
        <div className="split-divs">
          <div className="old">
            <div className="color-overlay">
              <img
                src={require("../Images/Locations/Recica/stara.jpg")}
                alt=""
              />
              <div className="text-over move-up-middle center-abs">
                <p>
                  Zamršje se nalazi u okolici naselja Rečica, koje je poznato po
                  očuvanju tradicije svog kulturno-umjetničkog društva Rečica i
                  glavnim simbolom - crkvom Sv. Ivana Krstitelja. U sklopu
                  blagdana odrzavaju se tradicionalne tijelovske procesije kroz
                  cijelo selo te proštenja - Vusikovanja kad se prilikom
                  svečanosti mještani obuku u tradicionalne rečičke nošnje.
                </p>
                <p>
                  Nalazi se na brežuljku s prekrasnim pogledom na okolna polja, šume i rijeku, a okruženo je netaknutom prirodom.
                </p>
              </div>
            </div>
          </div>
          <div className="new">
            <img
              src={require("../Images/Locations/Recica/nosnja.jpg")}
              alt=""
            />
            <img src={require("../Images/Locations/Recica/crkva.jpg")} alt="" />
          </div>
        </div>
      </div>
      <div className="bottom-part">
        <div className="split">
          <div className="left">
            <img
              src={require("../Images/Locations/Recica/nosnje.jpg")}
              alt=""
            />
          </div>
          <div className="right">
            <div className="move-up-middle">
              <p>
                Rečica se spominje jos u 14. stoljeću, dok je grof Janko
                Drašković u 17. stoljeću živio u dvorcu koji se ondje nalazi, a
                simbol Rečice je rečička ruža, crvene boje čiji je motiv vrlo
                čest na bogato ukrašenima nošnjama.
              </p>
              <p>
                KUD Rečica, koje ove godine slavi 100. obljetnicu i generacijma
                održava tradiciju, prenoseći ju s koljena na koljeno, najstarije
                je društvo u Karlovačkoj županiji. I dan danas njeguju izvorne
                plesove, pjesme i običaje rečickog kraja uz zvukove tamburice i
                violine, sudjelujući na manifestacijama kao čto su Đakovački
                vezovi i Vinkovačke jeseni.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recica;
