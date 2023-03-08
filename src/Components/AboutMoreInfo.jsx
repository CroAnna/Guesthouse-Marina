import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const AboutMoreInfo = () => {
  return (
    <div className="more-info-container">
      <FontAwesomeIcon icon={faInfoCircle} />
      <div className="info">
        <p>Dozvoljen je boravak kućnih ljubimaca i ne naplaćuje se.</p>
        <p>Pušenje u apartmanu nije dozvoljeno.</p>
        <p>
          U ovom objektu nije moguće održavanje momačkih, djevojačkih i sličnih
          zabava.
        </p>
      </div>
    </div>
  );
};

export default AboutMoreInfo;
