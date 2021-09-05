import React from "react";
import "./index.scss";
import busIcon from "../../images/busIcon.png";
import tramIcon from "../../images/tramIcon.png";
import trolIcon from "../../images/trolIcon.png";

export const TransportAnimation = () => {
  return (
    <div className="transport">
      <div className="transport__top">
        <div>
          <img src={busIcon} alt="bus" />
          <img src={tramIcon} alt="tram" />
          <img src={trolIcon} alt="trolley" />
          <img src={tramIcon} alt="tram" />
          <img src={busIcon} alt="bus" />
        </div>
        <div>
          <img src={busIcon} alt="bus" />
          <img src={tramIcon} alt="tram" />
          <img src={trolIcon} alt="trolley" />
          <img src={tramIcon} alt="tram" />
          <img src={busIcon} alt="bus" />
        </div>
        <div>
          <img src={busIcon} alt="bus" />
          <img src={tramIcon} alt="tram" />
          <img src={trolIcon} alt="trolley" />
          <img src={tramIcon} alt="tram" />
          <img src={busIcon} alt="bus" />
        </div>
      </div>
      <p>Вагон №</p>
      <h2>276</h2>
    </div>
  );
};
