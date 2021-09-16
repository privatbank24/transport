import { Button, Fade } from "@material-ui/core";
import React, { useState, useEffect, Fragment } from "react";
import { DeleteTicketModal } from "../../components/DeleteTicketModal";
import { Ticket } from "../../components/Ticket";
import { TicketScanner } from "../../components/TicketScanner";
import "./index.scss";

export const MyTickets = () => {
  const [isCreateModalOpened, setIsCreateModalOpened] =
    useState<boolean>(false);
  const [isDeleteModalOpened, setIsDeleteModalOpened] =
    useState<boolean>(false);
  const [activeTicket, setActiveTicket] = useState<string>("");
  const tickets = JSON.parse(localStorage.getItem("tickets")!);

  useEffect(() => {
    if (!tickets) {
      localStorage.setItem("tickets", JSON.stringify([]));
    }
  }, [tickets]);

  useEffect(() => {
    if (activeTicket) setIsDeleteModalOpened(true);
  }, [activeTicket]);

  useEffect(() => {
    if (isDeleteModalOpened) setActiveTicket("");
  }, [isDeleteModalOpened]);

  return (
    <>
      <Fade in>
        <div className="my-tickets">
          <div className="my-tickets__container">
            {!!tickets && !!tickets.length ? (
              <>
                {tickets.reverse().map((item: any, index: number) => {
                  return (
                    <Fragment key={item.date}>
                      <Ticket
                        seria={item.seria}
                        setActiveTicket={setActiveTicket}
                        date={item.date}
                        quantity={item.quantity}
                        price={item.price}
                        vagon={item.vagon}
                      />
                    </Fragment>
                  );
                })}
              </>
            ) : (
              <h1>Нет активных билетов</h1>
            )}
          </div>
          <Button onClick={() => setIsCreateModalOpened(!isCreateModalOpened)}>
            Отсканировать QR-код
          </Button>
        </div>
      </Fade>
      <TicketScanner
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
