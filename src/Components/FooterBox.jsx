import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterBox = ({ box }) => {
  return (
    <div className="footer-box">
      <p className="box-title">{box.title}</p>
      <div className="box-data">
        {box.data.map((data, index) => (
          <a href={data.url} key={index}>
            {data.icon ? (
              <FontAwesomeIcon className="icon" icon={data.icon} />
            ) : null}
            &nbsp;
            {data.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterBox;
