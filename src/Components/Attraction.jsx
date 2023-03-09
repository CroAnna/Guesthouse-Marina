import React from "react";

const Attraction = ({ attraction }) => {
  return (
    <div className="attraction">
      <div className="text ">
        <div className="move-up-middle inside">
          <h2>{attraction.title}</h2>
          <p>{attraction.description}</p>
        </div>
      </div>
      <div className="image">
        <img
          src={require(`../Images/Locations/Karlovac/${attraction.imageName}.jpg`)}
          alt=""
        />
      </div>
    </div>
  );
};

export default Attraction;
