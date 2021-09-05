import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { CreateTicketModal } from "../../components/CreateTicketModal";
import { Ticket } from "../../components/Ticket";
import "./index.scss";

export const MyTickets = () => {
  const [isCreateModalOpened, setIsCreateModalOpened] =
    useState<boolean>(false);

  return (
    <>
      <div className="my-tickets">
        <div>
          <Ticket />
        </div>
        <Button onClick={() => setIsCreateModalOpened(true)}>
          Отсканировать QR-код
        </Button>
      </div>
      <CreateTicketModal
        open={isCreateModalOpened}
        setOpen={setIsCreateModalOpened}
      />
    </>
  );
};
