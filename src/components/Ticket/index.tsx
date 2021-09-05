import React, { FC, useEffect, useState } from "react";
import "./index.scss";
import { TransportAnimation } from "../TransportAnimation";
import vtk from "../../images/vtk.png";
import Timer from "../Timer";
import moment from "moment";
import { useSwipeable } from "react-swipeable";

type TicketProps = {
  date?: any;
  time?: string;
  quantity?: number;
  price?: number;
  vagon?: string;
  setActiveTicket: (value: string) => void;
};

export const Ticket: FC<TicketProps> = ({
  date = "123",
  time = "321",
  quantity = 1,
  price = 8,
  vagon = "276",
  setActiveTicket,
}: TicketProps) => {
  const [minutes, setMinutes] = useState<number>(0);

  useEffect(() => {
    const currentDate = new Date();
    console.log("currentDate ", currentDate);
    console.log("date ", date);
    setMinutes(60 - Number(moment(date).from(currentDate).split(" ")[0]));
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: (e: any) => setActiveTicket(time),
  });

  return (
    <div className="ticket" {...handlers}>
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
        {minutes && <Timer initialMinute={minutes} initialSeconds={1} />}
      </div>
    </div>
  );
};
