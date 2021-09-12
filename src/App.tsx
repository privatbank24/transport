import React, { FC, useEffect, useState } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import "./scss/index.scss";
import { MyTickets } from "./pages/MyTickets";
import { SignIn } from "./pages/SignIn";
import { ROUTES } from "./utils/routes";
import history from "./utils/history";
import { checkToken } from "./actions/authentication";
import { MainLayoutWrapper } from "./components/MainLayoutWrapper";
import { MyTravelCards } from "./pages/MyTravelCards";
import { PayForTicketPage } from "./pages/PayForTicketPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";
import "./scss/toaster.scss";
import { HomePage } from "./pages/HomePage";

export const App: FC = () => {
  const [token] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const body = document.querySelector("body");
    if (window.location.pathname === ROUTES.DASHBOARD) {
      if (body) {
        body.setAttribute("style", "overflow: hidden");
      }
    } else {
      if (body) {
        body.setAttribute("style", "overflow: auto");
      }
    }
  }, []);

  useEffect(() => {
    setInterval(() => {
      checkToken();
    }, 30000);
  }, []);

  useEffect(() => {
    if (!token) history.push(ROUTES.LOGIN);
  }, [token]);

  return (
    <Router history={history}>
      <div className="App">
        <ToastContainer
          icon={false}
          closeButton={false}
          position="top-center"
          autoClose={5000}
          closeOnClick={false}
          hideProgressBar={true}
          pauseOnFocusLoss={false}
          draggable={false}
          transition={Slide}
        />
        <Switch>
          <Route exact path={ROUTES.LOGIN}>
            <SignIn />
          </Route>
          <MainLayoutWrapper>
            <Route exact path={ROUTES.MY_TICKETS}>
              <MyTickets />
            </Route>
            <Route exact path={ROUTES.DASHBOARD}>
              <HomePage />
            </Route>
            <Route exact path={ROUTES.MY_TRAVEL_CARDS}>
              <MyTravelCards />
            </Route>
            <Route exact path={ROUTES.PAY_FOR_TICKET}>
              <PayForTicketPage />
            </Route>
          </MainLayoutWrapper>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
