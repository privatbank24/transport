import React, { FC, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.scss";
import { MyTickets } from "./pages/MyTickets";
import { ROUTES } from "./utils/routes";

export const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={ROUTES.MY_TICKETS}>
            <MyTickets />
          </Route>
          <Route path={ROUTES.LOGIN}>
            <h1>login</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
