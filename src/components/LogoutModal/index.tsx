import { Button, Fade, Modal } from "@material-ui/core";
import React, { FC, useState } from "react";
import "../DeleteTicketModal/index.scss";
import ClearIcon from "@material-ui/icons/Clear";

type LogoutModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  logout: () => void;
};

export const LogoutModal: FC<LogoutModalProps> = ({
  open,
  setOpen,
  logout,
}: LogoutModalProps) => {
  return (
    <Modal open={open} className="delete-ticket">
      <Fade in={open}>
        <div className="delete-ticket__content">
          <h2>Вы точно хотите выйти?</h2>
          <p>(все билеты будут удалены)</p>
          <div>
            <Button onClick={() => setOpen(false)}>Нет</Button>
            <Button
              onClick={() => {
                logout();
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
