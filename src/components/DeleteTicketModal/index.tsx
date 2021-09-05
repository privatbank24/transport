import { Button, Fade, Modal } from "@material-ui/core";
import React, { FC, useState } from "react";
import "./index.scss";
import ClearIcon from "@material-ui/icons/Clear";

type DeleteTicketModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  activeTicket: string;
};

export const DeleteTicketModal: FC<DeleteTicketModalProps> = ({
  open,
  setOpen,
  activeTicket,
}: DeleteTicketModalProps) => {
  const deleteTicket = () => {
    const tickets: any = JSON.parse(localStorage.getItem("tickets")!);
    const index = tickets.findIndex((item: any) => item.time === activeTicket);
    const newArray = tickets;
    newArray.splice(index, 1);
    localStorage.setItem("tickets", JSON.stringify(newArray));
  };

  return (
    <Modal open={open} className="delete-ticket">
      <Fade in={open}>
        <div className="delete-ticket__content">
          <h2>Вы точно хотите удалить этот билет?</h2>
          <div>
            <Button onClick={() => setOpen(false)}>Нет</Button>
            <Button
              onClick={() => {
                setOpen(false);
                deleteTicket();
              }}
            >
              Да
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};
