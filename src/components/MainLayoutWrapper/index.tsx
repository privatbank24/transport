import React, { useEffect, useLayoutEffect, useState } from "react";
import "./index.scss";
import cx from "classnames";
import { useSwipeable } from "react-swipeable";
import { Button, IconButton } from "@material-ui/core";
import { LogoutModal } from "../LogoutModal";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { getAllTickets } from "../../actions/authentication";

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
          <div className="main-layout__navigation_top">
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
            <p>Городской транспорт</p>
            <div></div>
          </div>
          {(window.location.pathname === ROUTES.MY_TICKETS ||
            window.location.pathname === ROUTES.MY_TRAVEL_CARDS) && (
            <div className="main-layout__navigation_bottom">
              <Button
                onClick={() => {
                  // history.push(ROUTES.MY_TICKETS);
                  getAllTickets();
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
        <div {...mainHandlers} className="main-layout__container">
          {children}
        </div>
      </div>
      <LogoutModal
        open={isLogoutModalOpened}
        setOpen={setIsLogoutModalOpened}
        logout={() => {
          setTimeout(() => {
            setIsNavbarOpened(false);
            localStorage.clear();
            window.location.href = "http://192.168.0.103:3001/";
          }, 300);
        }}
      />
    </>
  );
};
