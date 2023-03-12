import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_189cjxd",
        "template_uz4p2jr",
        form.current,
        "FBMs7F2k5rhtlLlRJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          //success_();
        },
        (error) => {
          console.log(error.text);
          //error_();
        }
      );
    form.current.reset();
  };

  return (
    <div className="contact-form-container">
      <form action="" ref={form} onSubmit={sendEmail}>
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
        <button id="btnSend" type="submit">
          Kontaktiraj nas
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
