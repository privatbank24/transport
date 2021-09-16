import { FC, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./scss/index.scss";
import { MyTickets } from "./pages/MyTickets";
import { ROUTES } from "./utils/routes";
import { MainLayoutWrapper } from "./components/MainLayoutWrapper";
import { MyTravelCards } from "./pages/MyTravelCards";
import { PayForTicketPage } from "./pages/PayForTicketPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";
import "./scss/toaster.scss";
import { HomePage } from "./pages/HomePage";
import { Instruction } from "./pages/Instruction";

export const App: FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === ROUTES.DASHBOARD ||
      location.pathname === ROUTES.INSTRUCTION
    ) {
      document.querySelector("body")?.setAttribute("style", "overflow: hidden");
    } else {
      document.querySelector("body")?.setAttribute("style", "overflow: auto");
    }
  }, [location]);

  return (
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
          <Route exact path={ROUTES.INSTRUCTION}>
            <Instruction />
          </Route>
        </MainLayoutWrapper>
      </Switch>
    </div>
  );
};

export default App;
