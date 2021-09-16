import { Fade } from "@material-ui/core";
import React, { FC, useState } from "react";
import "./index.scss";

interface CardProps {
  card: any;
  name: string;
  type?: "visa" | "mastercard";
}

export const Card: FC<CardProps> = ({
  card,
  name,
  type = "mastercard",
}: CardProps) => {
  const [isCardNumberShown, setIsCardNumberShown] = useState<boolean>(false);

  return (
    // <Fade in>
    <div
      className="card-component"
      style={{
        background: `url('./cards/card (${card.cardImageIndex}).jpg')`,
      }}
    >
      <div className="card-component__content">
        <div className="card-component__content_top">
          <h2>{name}</h2>
          <p onClick={() => setIsCardNumberShown(!isCardNumberShown)}>
            {isCardNumberShown
              ? card.cardNumber
              : `${card.cardNumber.slice(
                  0,
                  4
                )} **** **** ${card.cardNumber.slice(14, 19)}`}
          </p>
          <p>07/23</p>
        </div>
        <div className="card-component__content_bottom">
          <p>{card.balance.split(".")[0]} UAH</p>
          <div className={type === "mastercard" ? "mastercard" : "visa"}>
            <img
              src={
                type === "mastercard"
                  ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/2560px-Mastercard_2019_logo.svg.png"
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Visa_2014.svg/2560px-Visa_2014.svg.png"
              }
              alt="card-provider"
            />
          </div>
        </div>
      </div>
    </div>
    // </Fade>
  );
};
