import React from "react";

const Recica = () => {
  return (
    <div className="recica-container">
      <div className="top-part">
        <div className="split">
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
                  Nalazi se na brežuljku s prekrasnim pogledom na okolna polja i
                  šume i rijeku, a okruženo je netaknutom prirodom.
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
    </div>
  );
};

export default Recica;
