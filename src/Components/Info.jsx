import React from "react";
import { infoList } from "../Data/InfoList";
import IconInfoItem from "./IconInfoItem";

const Info = () => {
  return (
    <div className="info-container">
      {infoList.map((item, index) => (
        <IconInfoItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Info;
