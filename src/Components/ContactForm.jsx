import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="inputs">
        <div className="input-group">
          <label htmlFor="name">Ime i prezime *</label>
          <input type="text" name="name" required />

          <label htmlFor="email">Vaš e-mail *</label>
          <input type="email" name="email" required />

          <label htmlFor="phone">Broj mobitela *</label>
          <input type="text" name="phone" required />

          <label htmlFor="checkin">Datum dolaska</label>
          <input type="date" name="checkin" />

          <label htmlFor="checkout">Datum odlaska</label>
          <input type="date" name="checkout" />
        </div>
        <div className="input-group">
          <label htmlFor="message">Poruka *</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>
      </div>
      <button id="btnSend">Kontaktiraj nas</button>
    </div>
  );
};

export default ContactForm;
