import React from "react";
import AboutImageSlider from "../Components/AboutImageSlider";
import AboutText from "../Components/AboutText";
import ApartmentContent from "../Components/ApartmentContent";
import CoverSlider from "../Components/CoverSlider";
import PhotoSlider from "../Components/PhotoSlider";

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
      </div>
    </div>
  );
};

export default OApartmanu;
