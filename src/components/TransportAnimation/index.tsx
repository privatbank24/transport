import React, { FC } from "react";
import "./index.scss";
import busIcon from "../../images/busIcon.png";
import tramIcon from "../../images/tramIcon.png";
import trolIcon from "../../images/trolIcon.png";

interface TransportAnimationProps {
  vagon: string;
}

export const TransportAnimation: FC<TransportAnimationProps> = ({
  vagon,
}: TransportAnimationProps) => {
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
      <h2>{vagon}</h2>
    </div>
  );
};
