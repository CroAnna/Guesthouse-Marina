import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import PhotoSlider from "./PhotoSlider";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MainImages = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { t } = useTranslation();
  return (
    <div className="main-images-container" data-aos="fade-up">
      <p>
        {t("main_img_container_1")}
        <b>{t("main_img_container_2")}</b>
        {t("main_img_container_3")}
        <b>{t("main_img_container_4")}</b>.
      </p>
      <PhotoSlider />
      <Link to="/oapartmanu">
        <button>
          {t("view_the_photo_gallery")}
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </button>
      </Link>
    </div>
  );
};

export default MainImages;
