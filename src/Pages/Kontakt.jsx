import React from "react";
import { Link } from "react-router-dom";
import BankDetails from "../Components/BankDetails";
import ContactForm from "../Components/ContactForm";
import Info from "../Components/Info";

const Kontakt = () => {
  return (
    <div className="page kontakt">
      <div className="title">
        <h1>Kontaktirajte nas</h1>
        <hr className="long" />
        <hr className="short" />
      </div>
      <div className="step-container">
        <div className="step-one">
          <div className="text">
            <p className="step-title">1. Pošaljite nam upit</p>
            <p>
              Pošaljite nam upit korištenjem sljedećeg kontakt formulara,
              e-mailom ili telefonom sa svim podacima (ime i prezime, e-mail,
              broj mobitela, datumi dolaska i odlaska i poruka) i kontaktirat
              ćemo Vas u nakraćem mogućem roku.
            </p>
            <p>
              Podatke o cijeni i uvjetima otkazivanja pronađite{" "}
              <Link to="/cjenik">ovdje</Link>.
            </p>
            <p>
              Podatke o dostupnosti možete dobiti kontaktiranjem nas pomoću ove
              forme ili na našoj službenoj&nbsp;
              <a href="https://www.booking.com/hotel/hr/studio-apartman-marina-karlovac.hr.html">
                Booking stranici
              </a>
            </p>
          </div>
          <div className="middle">
            <ContactForm />
            <Info />
          </div>
        </div>
        <div className="step-two">
          <div className="text">
            <p className="step-title">2. Osiguranje rezervacije (plaćanje)</p>
            <p>
              Rezervaciju osiguravate plaćanjem akontacije u iznosu jedne noći,
              a ostatak na dan dolaska.
            </p>
            <p>
              Nakon uplate pošaljite nam obavijest, a mi ćemo vam poslati
              potvrdu o rezervaciji.
            </p>
            <p>
              Za plaćanje unaprijed postoji mogućnost plaćanja putem bankovnog
              prijenosa, a na temelju ponude koju vam pošaljemo nakon
              zaprimljenog upita.
            </p>
          </div>
          <BankDetails />
        </div>
        <div className="step-three">
          <div className="text">
            <p className="step-title">3. Potvrda uplate i rezervacije</p>
            <p>
              Nakon uplate potvrdit ćemo zaprimljenu uplatu te
              rezervaciju.Veselimo se Vašem dolasku u Guest house Marina -
              Hrvatska!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
