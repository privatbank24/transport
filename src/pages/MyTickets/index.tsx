import { Button } from "@material-ui/core";
import React, { useState, useEffect, Fragment } from "react";
import { CreateTicketModal } from "../../components/CreateTicketModal";
import { DeleteTicketModal } from "../../components/DeleteTicketModal";
import { Ticket } from "../../components/Ticket";
import "./index.scss";

export const MyTickets = () => {
  const [isCreateModalOpened, setIsCreateModalOpened] =
    useState<boolean>(false);
  const [isDeleteModalOpened, setIsDeleteModalOpened] =
    useState<boolean>(false);
  const [activeTicket, setActiveTicket] = useState<string>("");
  const [tickets, setTickets] = useState(
    JSON.parse(localStorage.getItem("tickets")!)
  );

  useEffect(() => {
    if (!tickets) {
      localStorage.setItem("tickets", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    if (activeTicket) setIsDeleteModalOpened(true);
  }, [activeTicket]);

  useEffect(() => {
    if (isDeleteModalOpened) setActiveTicket("");
  }, [isDeleteModalOpened]);

  useEffect(() => {
    console.log("tickets");
  }, [tickets]);

  return (
    <>
      <div className="my-tickets">
        <div>
          {!!tickets && !!tickets.length ? (
            <>
              {tickets.map((item: any, index: number) => {
                return (
                  <Fragment key={item.date + item.time}>
                    <Ticket
                      setActiveTicket={setActiveTicket}
                      date={item.date}
                      time={item.time}
                      quantity={item.quantity}
                      price={item.price}
                      vagon={item.vagon}
                    />
                  </Fragment>
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
      <DeleteTicketModal
        activeTicket={activeTicket}
        open={isDeleteModalOpened}
        setOpen={setIsDeleteModalOpened}
      />
    </>
  );
};
