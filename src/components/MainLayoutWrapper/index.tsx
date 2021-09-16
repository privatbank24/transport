import React, { useEffect, useLayoutEffect, useState } from "react";
import "./index.scss";
import cx from "classnames";
import { useSwipeable } from "react-swipeable";
import { Button, IconButton } from "@material-ui/core";
import { LogoutModal } from "../LogoutModal";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

export const MainLayoutWrapper = ({ children }: any) => {
  const history = useHistory();
  const location = useLocation();
  const [isNavbarOpened, setIsNavbarOpened] = useState<boolean>(false);
  const [isLogoutModalOpened, setIsLogoutModalOpened] =
    useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<number>(0);

  const swipeRightFunc = () => {
    if (window.location.pathname === ROUTES.MY_TICKETS) {
      setIsNavbarOpened(true);
    } else if (window.location.pathname === ROUTES.MY_TRAVEL_CARDS) {
      history.push(ROUTES.MY_TICKETS);
    }
  };

  const swipeLeftFunc = () => {
    if (window.location.pathname === ROUTES.MY_TICKETS) {
      history.push(ROUTES.MY_TRAVEL_CARDS);
    }
  };

  const mainHandlers = useSwipeable({
    onSwipedRight: (e: any) => swipeRightFunc(),
    onSwipedLeft: (e: any) => swipeLeftFunc(),
  });

  const navbarHandlers = useSwipeable({
    onSwipedLeft: (e: any) => setIsNavbarOpened(false),
  });

  const changeActiveButton = () => {
    if (window.location.pathname === ROUTES.MY_TICKETS) {
      setActiveButton(1);
    } else if (window.location.pathname === ROUTES.MY_TRAVEL_CARDS) {
      setActiveButton(2);
    }
  };

  useLayoutEffect(() => {
    changeActiveButton();
  }, []);

  useEffect(() => {
    changeActiveButton();
  }, [window.location.pathname]);

  return (
    <>
      <div>
        <div className="main-layout__navigation">
          <div
            className={cx("main-layout__navigation_top", {
              hidden:
                window.location.pathname === ROUTES.DASHBOARD ||
                window.location.pathname === ROUTES.INSTRUCTION,
            })}
          >
            {window.location.pathname === ROUTES.MY_TICKETS ||
            window.location.pathname === ROUTES.MY_TRAVEL_CARDS ||
            window.location.pathname === ROUTES.PAY_FOR_TICKET ? (
              <>
                <IconButton
                  className="back"
                  onClick={() => history.push(ROUTES.DASHBOARD)}
                >
                  <ArrowBackIcon />
                </IconButton>
                <p className="city-transport">Городской транспорт</p>
                <div className="plug"></div>
              </>
            ) : (
              <></>
            )}
          </div>
          {(window.location.pathname === ROUTES.MY_TICKETS ||
            window.location.pathname === ROUTES.MY_TRAVEL_CARDS) && (
            <div className="main-layout__navigation_bottom">
              <Button
                onClick={() => {
                  history.push(ROUTES.MY_TICKETS);
                }}
                className={activeButton === 1 ? "active" : "disabled"}
              >
                Билеты
              </Button>
              <Button
                onClick={() => {
                  history.push(ROUTES.MY_TRAVEL_CARDS);
                }}
                className={activeButton === 2 ? "active" : "disabled"}
              >
                Проезные
              </Button>
            </div>
          )}
        </div>
        <div
          {...navbarHandlers}
          className={cx("main-layout__navbar", {
            opened: !!isNavbarOpened,
          })}
        >
          <Button onClick={() => setIsLogoutModalOpened(true)}>Log out</Button>
        </div>
        <div className="main-layout__container">{children}</div>
      </div>
    </>
  );
};
