import React from "react";
import AboutImageSlider from "../Components/AboutImageSlider";
import AboutMoreInfo from "../Components/AboutMoreInfo";
import AboutText from "../Components/AboutText";
import ApartmentContent from "../Components/ApartmentContent";

const OApartmanu = () => {
  return (
    <div className="page oapartmanu">
      <div className="title">
        <h1>Kako izgleda studio apartman Marina?</h1>
        <hr className="short" />
      </div>
      <div className="about-container">
        <div className="about-top-container">
          <AboutText />
          <AboutImageSlider />
        </div>
        <ApartmentContent />
        <AboutMoreInfo />
      </div>
    </div>
  );
};

export default OApartmanu;
