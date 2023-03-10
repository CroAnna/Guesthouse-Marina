import React from "react";

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6698.876757800653!2d15.686668349835095!3d45.511499838785106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764249c016dc477%3A0xc86048d08c1e8323!2sD36%209%2C%2047203%2C%20Zamr%C5%A1je!5e1!3m2!1shr!2shr!4v1678213590594!5m2!1shr!2shr"
        
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </div>
  );
};

export default Map;
