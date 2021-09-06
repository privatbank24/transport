import React, { FC, useEffect, useState } from "react";
import "./index.scss";
import { TransportAnimation } from "../TransportAnimation";
import vtk from "../../images/vtk.png";
import Timer from "../Timer";
import moment from "moment";
import { useSwipeable } from "react-swipeable";

type TicketProps = {
  date?: any;
  quantity?: number;
  price?: number;
  vagon?: string;
  setActiveTicket: (value: string) => void;
};

export const Ticket: FC<TicketProps> = ({
  date = "123",
  quantity = 1,
  price = 8,
  vagon = "276",
  setActiveTicket,
}: TicketProps) => {
  const [minutes, setMinutes] = useState<number | null>(null);
  const [seconds, setSeconds] = useState<number | null>(null);

  useEffect(() => {
    const currentDate = new Date().getTime();
    const time = Math.floor(
      Number((currentDate - new Date(date).getTime()) / 1000)
    );
    let minutesRes = Math.floor(time / 60);
    let secondsRes = time - minutesRes * 60;

    if (60 - minutesRes === 60) {
      setMinutes(59);
    } else {
      setMinutes(60 - minutesRes);
    }
    if (60 - secondsRes === 60) {
      setSeconds(59);
    } else {
      setSeconds(60 - secondsRes);
    }
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: (e: any) => setActiveTicket(date),
  });

  return (
    <>
      {!!minutes && (
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
                <p>{new Date(date).toLocaleDateString("ru-RU")}</p>
              </div>
              <div>
                <h2>Время</h2>
                <p>
                  {new Date(date).toLocaleTimeString("en-US", {
                    hour12: false,
                  })}
                </p>
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
            {!!minutes && !!seconds && (
              <Timer initialMinute={minutes} initialSeconds={seconds} />
            )}
          </div>
        </div>
      )}
    </>
  );
};
