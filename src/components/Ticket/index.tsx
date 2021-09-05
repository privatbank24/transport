import React, { FC, useEffect } from "react";
import "./index.scss";
import { TransportAnimation } from "../TransportAnimation";
import vtk from "../../images/vtk.png";

type TicketProps = {
  date?: string;
  time?: string;
  quantity?: number;
  price?: number;
  vagon?: string;
};

export const Ticket: FC<TicketProps> = ({
  date = "123",
  time = "321",
  quantity = 1,
  price = 8,
  vagon = "276",
}: TicketProps) => {
  return (
    <div className="ticket">
      <div className="ticket__top">
        <div className="ticket__top_left">
          <img src={vtk} alt="logo" />
        </div>
        <div className="ticket__top_right">
          <p>Вінниця</p>
          <p>КП Вінницька транспортна компанія</p>
          <p>
            Серия <span>196011268</span>
          </p>
        </div>
      </div>
      <div className="ticket__main">
        <TransportAnimation vagon={vagon} />
        <div className="ticket__main_right">
          <div>
            <h2>Дата</h2>
            <p>
              {date
                .slice(0, 10)
                .split("-")
                .reverse()
                .join("-")
                .replaceAll("-", ".")}
            </p>
          </div>
          <div>
            <h2>Время</h2>
            <p>{time.slice(0, 8)}</p>
          </div>
          <div>
            <h2>Стандартный</h2>
            <p>
              {quantity} <span>шт</span>
            </p>
          </div>
          <div>
            <h2>Стоимость</h2>
            <p>
              {price}.0 <span>UAH</span>
            </p>
          </div>
        </div>
      </div>
      <div className="ticket__bottom">
        <h2>Билет разового использования</h2>
        <p>00:40:12</p>
      </div>
    </div>
  );
};
