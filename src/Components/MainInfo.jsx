import React from "react";

const MainInfo = () => {
  return (
    <div className="main-info-container">
      <div className="left">
        <img
          src={require("../Images/house-photos-collage.png")}
          alt="collage"
        />
      </div>
      <div className="right">
        <div className="right-cloud">Dobrodošli</div>
        <div>
          <p>
            Studio apartman Marina nalazi se u Zamršju, mjestu 13 km istočno od
            grada Karlovca. Objekt se sastoji od prostora za spavanje, boravak,
            blagovanje, kuhanje te kupaonice.
          </p>
          <p>
            Prostor za spavanje sadrži 2 kreveta za jednu osobu koji se lako
            mogu složiti u bračni krevet. Kuhinja je opremljena kućanskim
            aparatima (perilica posuđa, pećnica, ploča za kuhanje, električno
            kuhalo za vodu, hladnjak) i posuđem za pripremu i serviranje jela.
          </p>
          <p>
            Dnevni boravak opremljen je kutnom garniturom koja se lako namjesti
            u udoban pomoćni ležaj za dvije osobe. U prostoru se nalazi i TV
            ravnog ekrana, perilica rublja, klima uređaj te peć na drva za
            posebno topao ugođaj u hladnim danima.
          </p>
          <p>
            Za aktivan odmor nudi se besplatan najam bicikala te stol za stolni
            tenis. Moguće šetnje i boravak u prirodi. Blizina rijeke Kupe nudi
            osvježenje u ljetnim mjesecima te je odlično mjesto za ribolov.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
