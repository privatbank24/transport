import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./index.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { CustomCheckbox } from "../../components/CustomCheckbox";
import cx from "classnames";
import { ROUTES } from "../../utils/routes";
import { useHistory } from "react-router-dom";
import { FirtsTimeQRModal } from "../../components/FirstTimeQRModal";
import { getAllTickets } from "../../actions/authentication";
import { LoaderLogo } from "../../components/LoaderLogo";
import { toast } from "react-toastify";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";

export const PayForTicketPage = () => {
  const scannedQR = localStorage.getItem("currentQR");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const userCards = JSON.parse(localStorage.getItem("userCards")!);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false);
  const [ticketsQuantity, setTicketsQuantity] = useState<number>(0);
  const [isQRModalOpen, setIsQRModalOpen] = useState<boolean>(false);
  const [knownQRs, setKnownQRs] = useState<Array<any>>();
  const [vagonNumber, setVagonNumber] = useState<string>("");
  const history = useHistory();

  const notify = () =>
    toast.success(() => (
      <div className="toast__success-purchase">
        <div>
          <CheckRoundedIcon />
        </div>
        <div>
          <h3>Оплата успешна</h3>
          <p>
            Ваши билеты доступны вам в сервисе
            <br />
            "Городской транспорт"
          </p>
        </div>
      </div>
    ));

  const pullData = async () => {
    const res = await getAllTickets();
    setKnownQRs(res);
  };

  const createTicket = async () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const tickets: any = JSON.parse(localStorage.getItem("tickets")!);
      const currDate = new Date();
      let ticket = {
        date: currDate,
        quantity: ticketsQuantity,
        price: 8,
        vagon: vagonNumber,
      };
      const newArr = tickets;
      newArr.push(ticket);
      localStorage.setItem("tickets", JSON.stringify(newArr));
      history.push(ROUTES.MY_TICKETS);
      notify();
    }, 2000);
  };

  useEffect(() => {
    pullData();
  }, []);

  useEffect(() => {
    if (scannedQR && knownQRs) {
      if (knownQRs.some((item: any) => item.title === scannedQR)) {
        const elIndex = knownQRs.findIndex(
          (item: any) => item.title === scannedQR
        );
        setVagonNumber(knownQRs[elIndex].description);
      } else {
        setIsQRModalOpen(true);
      }
    }
  }, [knownQRs]);

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
                    <img
                      src={`/cards/card (${userCards[0].cardImageIndex}).jpg`}
                      alt="card"
                    />
                  </div>
                  <div className="checkout__main_options_right">
                    <p>
                      *{userCards[0].cardNumber.slice(-4)} Карта универсальная
                    </p>
                    <p>
                      <span>{userCards[0].balance} UAH</span>
                    </p>
                  </div>
                </div>
                <div className="checkout__main_options">
                  <div className="checkout__main_options_left">
                    <img
                      src={`/cards/card (${userCards[1].cardImageIndex}).jpg`}
                      alt="card"
                    />
                  </div>
                  <div className="checkout__main_options_right">
                    <p>*{userCards[1].cardNumber.slice(-4)} Карта для выплат</p>
                    <p>
                      <span>{userCards[1].balance} UAH</span>
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
      <FirtsTimeQRModal
        setVagonNumber={setVagonNumber}
        open={isQRModalOpen}
        setOpen={setIsQRModalOpen}
      />
      <LoaderLogo open={isLoading} text="Определяем способ подтверждения" />
    </>
  );
};
