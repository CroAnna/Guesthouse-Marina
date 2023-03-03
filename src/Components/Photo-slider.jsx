import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default class PhotoSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          // mobile
          breakpoint: 961,
          settings: {
            variableWidth: false,
          },
        },
        {
          // desktop
          breakpoint: 2200,
          settings: {
            variableWidth: true,
          },
        },
      ],
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

    const images = [
      { url: require("../Images/apt1.jpg") },
      { url: require("../Images/apt2.jpg") },
      { url: require("../Images/apt3.jpg") },
    ];

    return (
      <div className="slider-container">
        <Slider {...settings} style={{ display: "flex" }}>
          {images.map((item, index) => (
            <div key={index}>
              <img src={item.url} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
