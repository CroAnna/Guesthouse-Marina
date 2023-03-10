import React from "react";

const OtherLocations = () => {
  return (
    <div className="other-container">
      <div className="location">
        <img src={require("../Images/Locations/Other/plitvice.jpg")} alt="" />
        <div className="description">
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
        <div className="description center-abs">
          <h2>Jadranska obala</h2>
          <p>
          Karlovac je svega sat i pol vožnje udaljen od obale Jadranskog mora i gradova poput Crikvenice i Opatije - savršenih mjesta za izlet i kupanje.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtherLocations;
