import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const ApartmentContent = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { t } = useTranslation();
  return (
    <div className="content-container">
      <p className="content-title">{t("app_content")}</p>
      <div className="groups" data-aos="fade-up">
        <div className="left">
          <ul>
            <li>{t("kitchen")}</li>
            <li>{t("living_room")}</li>
            <li>{t("bedroom")}</li>
            <li>{t("bathroom")}</li>
            <li>{t("terrace")}</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>56 m2</li>
            <li>TV</li>
            <li>✨{t("parking")}✨</li>
            <li>{t("wifi")}</li>
            <li>✨{t("jacuzzi")}✨</li>
            <li>{t("air_conditioning")}</li>
            <li>{t("two_beds")}</li>
            <li>{t("closet")}</li>
            <li>{t("table_and_chairs")}</li>
            <li>{t("wash_mach")}</li> 
            <li>✨{t("terrace_")}✨</li>
            <li>{t("oven")}</li>
            <li>{t("refrigerator")}</li>
            <li>{t("dishwasher")}</li>
            <li>{t("kettle")}</li> <li>{t("corner_garn")}</li>
            <li>{t("hobs")}</li>
            <li>{t("tableware")}</li>
            <li>{t("wood_stove")}</li>
            <li>{t("shower_cabin")}</li>
            <li>{t("hairdryer")}</li>
            <li>✨{t("outdoor_fireplace")}✨</li>
            <li>{t("bbq_equipment")}</li>
            <li>{t("garden")}</li>
            <li>{t("bicycle_rental")}</li>
            <li>{t("table_for_tt")}</li>
            <li>{t("near_river")}</li>
            <li>Nintendo Wii</li>
            <li>{t("river_bath")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApartmentContent;
