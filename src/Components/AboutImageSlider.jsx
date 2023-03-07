import React, { Component } from "react";
import Slider from "react-slick";
import { AboutImagesList } from "../Data/AboutImagesList";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default class AboutImageSlider extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    function SampleNextArrow(props) {
      const { onClick } = props;
      return (
        <div className="arrow" onClick={onClick}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      );
    }
    function SamplePrevArrow(props) {
      const { onClick } = props;
      return (
        <div className="arrow" onClick={onClick}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
      );
    }
    return (
      <div className="slider-container">
        <Slider {...settings} style={{ display: "flex" }}>
          {AboutImagesList.map((image, index) => (
            <div key={index}>
              <img
                src={require("../Images/About/" + image.name)}
                alt=""
                style={{ width: "95%", height: "100%" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
