import React from "react";

const Zamrsje = () => {
  return (
    <div className="zamrsje-container">
      <div className="cover">
        <img src={require("../Images/Locations/Zamrsje/cover.jpg")} alt="" />
        <div className="description">
          <p>
            Apartman Marina nalazi se u Zamršju, selu koje je 13 kilometara
            udaljeno od najbližeg grada, Karlovca.
          </p>
          <p>
            Glavno obilježje Zamršja jest rijeka Kupa ili kako su ju Rimljani
            zvali, vijugava rijeka - gdje se danas može uživati u prekrasnom
            krajoliku i prirodi. Kupanje u rijeci Kupi je posebno popularna
            aktivnost u ljetnim mjesecima, dok su šetnje, bicikliranje i pecanje
            idealne aktivnosti u jesenskim i proljetnim mjesecima. Zamršje je
            idealno mjesto za bijeg od gradske vreve i opuštanje u prirodi uz
            rijeku Kupu.
          </p>
          <p>
            Ono je u sklopu sela sa središtem u Rečici, mjestu s bogatom
            tradicionalnom baštinom koje je u županiji prepoznatljivo po svome
            Kulturno-umjetničkom drustvu i povijesti.
          </p>
        </div>
      </div>
      <div className="images">
        <img src={require("../Images/Locations/Zamrsje/small1.jpg")} alt="" />
        <img src={require("../Images/Locations/Zamrsje/small2.jpg")} alt="" />
        <img src={require("../Images/Locations/Zamrsje/small3.jpg")} alt="" />
      </div>
      <div className="text">
        <p>
          Glavne prednosti sela su stapanje s prirodom, miran zivot i uzivanje.
          Tijekom ljetnih mjeseci stanovnici se kupaju u rijeci Kupi, na
          kupalistu o kojem se sami brinu te ga ureduju. Osim toga, obala je
          savrsena za pecanje rijecnih riba poput sarana i stuka, a taj
          umirujuci sport idealan je za svakog tko se zeli opustati provodeci
          vrijeme u prirodi.
        </p>
        <p>
          Osim za ljude, mjesto je idealno za zivotinje, primjerice pse koji se
          vole kupati jer rijeka nije brza te se ljubimci obozavaju kretati
          plicakom i hvatati vilinske konjice koji lete oko lopoca. Od apartmana
          do kupalista ima kilometar udaljenosti, a moguc je pristup i biciklom
          i automobilom. Preporucamo provesti vrijeme na obali i uzivati u miru
          (piknik je odlicna ideja).
        </p>
      </div>
      <div className="split">
        <div className="left">
          <img
            src={require("../Images/Locations/Zamrsje/visibabe.jpg")}
            alt=""
          />
        </div>
        <div className="right">
          <div className="move-up-middle">
            <p>
              Oduvijek su se stanovnici bavili poljoprivredom, no posljednjih
              godina sve vise obiteliji otvara vlastita obiteljska
              poljoprivredna gospodarstva i zeli zivjeti uzgajajuci vlastite
              proizvode.
            </p>
            <p>
              Tako danas vrlo lako mozete kupiti namirnice poput jaja, raznih
              vrsta povrca, dzemova itd. od susjednih obitelji.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="images">
        <img src={require("../Images/Locations/Zamrsje/kokosi.jpg")} alt="" />
        <img src={require("../Images/Locations/Zamrsje/grozde.jpg")} alt="" />
        <img src={require("../Images/Locations/Zamrsje/buce.jpg")} alt="" />
      </div>
      <div className="split kapela">
        <div className="right">
          <div className="move-up-middle">
            <p>
              Setajuci selom, mozete naici na tradicionalne drvene kuce koje
              predstavljaju simbol Pokuplja iz 18. i 19. stoljeca. Izgradili su
              ih najcesce sami seljaci od drveta hrasta.
            </p>
            <p>
              Zastitnik sela je sveti Florijan pa se u sreditu sela nalazi
              kapela svetog Florijana, a njegovo zvono svako jutro budi
              stanovnike koje je poznato pod imenom zvona uz Kupu.
            </p>
          </div>
        </div>
        <div className="left ">
          <img src={require("../Images/Locations/Zamrsje/kapela.jpg")} alt="" />
        </div>
      </div>
      <div className="cover">
        <img src={require("../Images/Locations/Zamrsje/zalazak.jpg")} alt="" />{" "}
      </div>
    </div>
  );
};

export default Zamrsje;
