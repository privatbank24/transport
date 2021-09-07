import React, { FC, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.scss";
import { MyTickets } from "./pages/MyTickets";
import { SignIn } from "./pages/SignIn";
import { ROUTES } from "./utils/routes";
import history from "./utils/history";
import { checkToken } from "./actions/authentication";
import { MainLayoutWrapper } from "./components/MainLayoutWrapper";
import { MyTravelCards } from "./pages/MyTravelCards";

export const App: FC = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    setInterval(() => {
      checkToken();
    }, 5000);
  }, []);

  useEffect(() => {
    if (!token) history.push(ROUTES.LOGIN);
  }, [token]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={ROUTES.LOGIN}>
            <SignIn />
          </Route>
          <MainLayoutWrapper>
            <Route exact path={ROUTES.MY_TICKETS}>
              <MyTickets />
            </Route>
            <Route exact path={ROUTES.MY_TRAVEL_CARDS}>
              <MyTravelCards />
            </Route>
          </MainLayoutWrapper>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
