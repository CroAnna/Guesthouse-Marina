import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";

const FooterBox = ({ box }) => {
  const { t } = useTranslation();
  return (
    <div className="footer-box">
      <p className="box-title">{t(`${box.title}`)}</p>
      <div className="box-data">
        {box.data.map((data, index) => (
          <a href={data.url} key={index}>
            {data.icon ? (
              <FontAwesomeIcon className="icon" icon={data.icon} />
            ) : null}
            {data.icon ? " " : null}
            {t(`${data.name}`)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterBox;
