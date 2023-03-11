import i18next from "i18next";
import React from "react";

const Languages = () => {
  return (
    <div className="lang-container">
      <div className="lang-icons">
        <img
          src={require("../Images/croatia.png")}
          alt=""
          onClick={() => i18next.changeLanguage("hr")}
          title="Promijeni jezik na hrvatski"
        />
        <img
          src={require("../Images/united-kingdom.png")}
          alt=""
          onClick={() => i18next.changeLanguage("en")}
          title="Change language to english"
        />
      </div>
    </div>
  );
};

export default Languages;
