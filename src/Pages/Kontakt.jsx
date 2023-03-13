import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BankDetails from "../Components/BankDetails";
import ContactForm from "../Components/ContactForm";
import Info from "../Components/Info";

const Kontakt = () => {
  const { t } = useTranslation();
  return (
    <div className="page kontakt">
      <div className="title">
        <h1>{t("contact_us")}</h1>
        <hr className="long" />
        <hr className="short" />
      </div>
      <div className="step-container">
        <div className="step-one">
          <div className="text">
            <p className="step-title">{t("step_one")}</p>
            <p>{t("step_one_msg_1")}</p>
            <p>
              {t("step_one_msg_2")}
              <Link to="/cjenik">{t("here")}</Link>.
            </p>
            <p>
              {t("step_one_msg_3")}
              &nbsp;
              <a href="https://www.booking.com/hotel/hr/studio-apartman-marina-karlovac.hr.html">
                {t("")}
                {t("booking_page")}
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
            <p className="step-title">{t("step_two")}</p>
            <p>{t("step_two_msg_1")}</p>
            <p>{t("step_two_msg_2")}</p>
            <p>{t("step_two_msg_3")}</p>
          </div>
          <BankDetails />
        </div>
        <div className="step-three">
          <div className="text">
            <p className="step-title">{t("step_three")}</p>
            <p>{t("step_three_msg")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
