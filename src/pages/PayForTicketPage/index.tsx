import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./index.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import card1 from "../../images/card1.png";
import { CustomCheckbox } from "../../components/CustomCheckbox";
import cx from "classnames";
import { CreateTicketModal } from "../../components/CreateTicketModal";
import { ROUTES } from "../../utils/routes";
import { useHistory } from "react-router-dom";

export const PayForTicketPage = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false);
  const [isCreateModalOpened, setIsCreateModalOpened] =
    useState<boolean>(false);
  const [ticketsQuantity, setTicketsQuantity] = useState<number>(0);
  const history = useHistory();

  const createTicket = async () => {
    const tickets: any = JSON.parse(localStorage.getItem("tickets")!);
    const currDate = new Date();
    let ticket = {
      date: currDate,
      quantity: ticketsQuantity,
      price: ticketsQuantity * 8,
      vagon: "23",
    };
    const newArr = tickets;
    newArr.push(ticket);
    await localStorage.setItem("tickets", JSON.stringify(newArr));
    history.push(ROUTES.MY_TICKETS);
  };

  return (
    <>
      <div className="checkout">
        <div>
          <div className="checkout__main">
            <div className="checkout__main_cards">
              <p>С карты</p>
              <p>
                <span>Все карты</span>
                <ArrowForwardIosIcon />
              </p>
            </div>
            <div className="checkout__main_wrapper-main">
              <div className="checkout__main_wrapper">
                <div className="checkout__main_options">
                  <div className="checkout__main_options_left">
                    <img src={card1} alt="card" />
                  </div>
                  <div className="checkout__main_options_right">
                    <p>*5160 Карта универсальная</p>
                    <p>
                      <span>260.43 UAH</span>
                    </p>
                  </div>
                </div>
                <div className="checkout__main_options">
                  <div className="checkout__main_options_left">
                    <img src={card1} alt="card" />
                  </div>
                  <div className="checkout__main_options_right">
                    <p>*5160 Карта универсальная</p>
                    <p>
                      <span>260.43 UAH</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("checkout__billing", {
              closed: !isCheckboxChecked,
            })}
          >
            <div className="checkout__billing_top">
              <div className="checkout__billing_top_left">
                <CustomCheckbox
                  executiveFunction1={() => setTicketsQuantity(0)}
                  executiveFunction2={() => setTicketsQuantity(1)}
                  isChecked={isCheckboxChecked}
                  setIsChecked={setIsCheckboxChecked}
                />
                <section>
                  <h2>Проезд</h2>
                  <p>Трамвай, Троллейбус</p>
                </section>
              </div>
              <p className="checkout__billing_price">
                8.00 <span>UAH</span>
              </p>
            </div>
            <div className="checkout__billing_bottom">
              <div>
                <Button
                  onClick={() => {
                    if (ticketsQuantity > 1) {
                      setTicketsQuantity(ticketsQuantity - 1);
                    }
                  }}
                >
                  -
                </Button>
                <p>{ticketsQuantity}</p>
                <Button onClick={() => setTicketsQuantity(ticketsQuantity + 1)}>
                  +
                </Button>
              </div>
              <p className="checkout__billing_price">
                {ticketsQuantity * 8}.00 <span>UAH</span>
              </p>
            </div>
          </div>
        </div>
        <div className="checkout__bottom">
          <div>
            <p>Всего к оплате</p>
            <p>{ticketsQuantity * 8}.0 UAH</p>
          </div>
          <Button disabled={!ticketsQuantity} onClick={createTicket}>
            Оплатить {ticketsQuantity * 8}.0 UAH
          </Button>
        </div>
      </div>
      <CreateTicketModal
        open={isCreateModalOpened}
        setOpen={setIsCreateModalOpened}
      />
    </>
  );
};
