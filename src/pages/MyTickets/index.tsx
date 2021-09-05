import { Button } from "@material-ui/core";
import React from "react";
import { Ticket } from "../../components/Ticket";
import "./index.scss";

export const MyTickets = () => {
  return (
    <div className="my-tickets">
      <div>
        <Ticket />
      </div>
      <Button>Отсканировать QR-код</Button>
    </div>
  );
};
