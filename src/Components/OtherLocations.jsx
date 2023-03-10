import React from "react";

const OtherLocations = () => {
  return (
    <div className="other-container">
      <div className="location ">
        <img src={require("../Images/Locations/Other/plitvice.jpg")} alt="" />
        <div className="description right">
          <h2>Plitvička jezera</h2>
          <p>
            Najstariji, najveći i najposjećeniji nacionalni park u Hrvatskoj
            kojeg svatko treba bar jednom posjetiti, a sastoji se od 16 jezera i
            mnogobrojnih slapova. Jedna od temeljnih osobitosti Plitvica su
            sedrene barijere nastale tijekom desetaka tisuća godina.
          </p>
        </div>
      </div>
      <div className="location zg">
        <img src={require("../Images/Locations/Other/zagreb.jpg")} alt="" />
        <div className="description center-abs">
          <h2>Zagreb</h2>
          <p>
            Glavni grad Republike Hrvatske, samo pola sata vožnje od Karlovca,
            obavezan je dio posjeta Hrvatskoj. Posjetite crkvu sv. Marka, Ilicu,
            park Zrinjevac, Muzej iluzija i Muzej prekinutih veza, tržnicu Dolac
            i ostale znamenitosti.
          </p>
        </div>
      </div>
      <div className="location">
        <img src={require("../Images/Locations/Other/adriatic.jpg")} alt="" />
        <div className="description center-abs jad">
          <h2>Jadranska obala</h2>
          <p>
            Karlovac je svega sat i pol vožnje udaljen od obale Jadranskog mora
            i gradova poput Crikvenice i Opatije - savršenih mjesta za izlet i
            kupanje.
          </p>
        </div>
      </div>
      <div className="gastro">
        <h2>Gastronomija</h2>
        <div className="gastro-content">
          <div className="gastro-left">
            <div className="left">
              <img
                src={require("../Images/Locations/Other/gastro.jpg")}
                alt=""
              />
            </div>
            <div className="right">
              <div className="move-up-middle text">
                <p>
                  Tradicionalni okusi miješaju se s utjecajima stranih kuhinja
                  jer, kao što se i kroz povijest na ovom području miješalo
                  mnoštvo kultura - osim hrvatske kuhinje s područja Dalmacije,
                  Zagorja, Like i Slavonije, prisutne su austrijska, mađarska,
                  turska i talijanska kuhinja.
                </p>
                <p>
                  Birajte između pogleda na rijeke, unutrašnjosti dvoraca,
                  intimnih dvorišta ili modernih i urbanih restorana, a u jedno
                  smo sigurni, da ćete uživati u delicijama poput fiš-paprikaša,
                  sarme, štrukla i ostalih jela.
                </p>
              </div>
            </div>
          </div>
          <div className="gastro-right">
            <img
              className="move-up-middle"
              src={require("../Images/Locations/Other/qr-gastronomija.png")}
              alt=""
            />
            <p>Za više detalja skenirajte QR kod</p>
          </div>
        </div>
      </div>
      <div className="bottom-sentence">
        <p>Upustite se u ovu opuštajuću avanturu.</p>
      </div>
    </div>
  );
};

export default OtherLocations;
