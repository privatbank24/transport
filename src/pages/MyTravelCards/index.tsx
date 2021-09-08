import { Button, Fade } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { ROUTES } from "../../utils/routes";

export const MyTravelCards = () => {
  const history = useHistory();
  const handlers = useSwipeable({
    onSwipedLeft: (e: any) => history.push(ROUTES.MY_TICKETS),
  });

  return (
    <div className="my-tickets">
      <div className="my-tickets__container">
        <h1>Нет активных проездных</h1>
      </div>
      <Button>Отсканировать QR-код</Button>
    </div>
  );
};
