import React, { FC, useEffect, useState } from "react";
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
        {new Array(3).fill("").map((item, j) => (
          <div key={j}>
            {new Array(5).fill("").map((item, i) => (
              <img
                key={j.toString() + i.toString()}
                style={{ animationDelay: `${Math.floor(Math.random() * 5)}s` }}
                src={
                  i === 0 || i === 4
                    ? busIcon
                    : i === 1 || i === 3
                    ? tramIcon
                    : trolIcon
                }
                alt="transport"
              />
            ))}
          </div>
        ))}
      </div>
      <p>Вагон №</p>
      <h2>{vagon}</h2>
    </div>
  );
};
