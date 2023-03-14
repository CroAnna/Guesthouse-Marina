import React from "react";
import { useTranslation } from "react-i18next";

const Attraction = ({ attraction }) => {
  const { t } = useTranslation();
  return (
    <div className="attraction">
      <a href={attraction.url}>
        <div className="text ">
          <div className="move-up-middle inside">
            <h2>{t(`${attraction.title}`)}</h2>
            <p>{t(`${attraction.description}`)}</p>
          </div>
        </div>
        <div className="image">
          <img
            src={require(`../Images/Locations/Karlovac/${attraction.imageName}.jpg`)}
            alt=""
          />
          <p>{attraction.used ? "Fotografija je preuzeta" : null}</p>
        </div>
      </a>
    </div>
  );
};

export default Attraction;
