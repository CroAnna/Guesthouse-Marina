import React from "react";
import AboutImageSlider from "../Components/AboutImageSlider";
import AboutText from "../Components/AboutText";
import CoverSlider from "../Components/CoverSlider";
import PhotoSlider from "../Components/PhotoSlider";

const OApartmanu = () => {
  return (
    <div className="page oapartmanu">
      <div className="title">
        <h1>O apartmanu</h1>
        <hr className="short" />
      </div>
      <div className="about-container">
        <div className="about-top-container">
          <AboutText />
          <AboutImageSlider />
        </div>
      </div>
    </div>
  );
};

export default OApartmanu;
