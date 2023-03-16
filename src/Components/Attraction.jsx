import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Attraction = ({ attraction }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { t } = useTranslation();
  return (
    <div className="attraction" data-aos="fade-up">
      <a href={attraction.url}>
        <div className="text ">
          <div className="move-up-middle inside">
            <h2>{t(`${attraction.title}`)}</h2>
            <p>{t(`${attraction.description}`)}</p>
          </div>
        </div>
        <div
          className="image"
          data-aos="fade-down-left"
          data-aos-anchor="center-center"
        >
          <img
            src={require(`../Images/Locations/Karlovac/${attraction.imageName}.jpg`)}
            alt=""
          />
          <p className={attraction.used ? "" : "hidden"}>
            {t("photo_is_downloaded")}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Attraction;
