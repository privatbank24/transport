import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./index.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import card1 from "../../images/card1.png";
import { CustomCheckbox } from "../../components/CustomCheckbox";
import cx from "classnames";

export const PayForTicketPage = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false);

  return (
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
              <Button>-</Button>
              <p>1</p>
              <Button>+</Button>
            </div>
            <p className="checkout__billing_price">
              8.00 <span>UAH</span>
            </p>
          </div>
        </div>
      </div>
      <div className="checkout__bottom">
        <div>
          <p>Всего к оплате</p>
          <p>0.0 UAH</p>
        </div>
        <Button>Оплатить</Button>
      </div>
    </div>
  );
};
