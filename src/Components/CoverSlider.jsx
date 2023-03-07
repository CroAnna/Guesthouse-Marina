import React, { Component } from "react";
import Slider from "react-slick";
import { CoverImagesList } from "../Data/CoverImagesList";

export default class CoverSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: 1,
    };
    return (
      <div className="cover-slider-container">
        <Slider {...settings} style={{ width: "100%" }}>
          {CoverImagesList.map((image, index) => (
            <div>
              <img
                style={{ width: "100%" }}
                src={require("../Images/Cover/" + image.name)}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
