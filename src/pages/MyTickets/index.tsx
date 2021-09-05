import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { CreateTicketModal } from "../../components/CreateTicketModal";
import { Ticket } from "../../components/Ticket";
import "./index.scss";

export const MyTickets = () => {
  const [isCreateModalOpened, setIsCreateModalOpened] =
    useState<boolean>(false);
  const tickets: any = JSON.parse(localStorage.getItem("tickets")!);

  useEffect(() => {
    if (!tickets) {
      localStorage.setItem("tickets", JSON.stringify([]));
    }
  }, []);

  return (
    <>
      <div className="my-tickets">
        <div>
          {!!tickets && !!tickets.length ? (
            <>
              {tickets.map((item: any, index: number) => {
                return (
                  <Ticket
                    date={item.date}
                    time={item.time}
                    quantity={item.quantity}
                    price={item.price}
                    vagon={item.vagon}
                  />
                );
              })}
            </>
          ) : (
            <h1>Нету активных билетов</h1>
          )}
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
