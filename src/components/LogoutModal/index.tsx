import { Button, Fade, Modal } from "@material-ui/core";
import { FC } from "react";
import "../DeleteTicketModal/index.scss";

type LogoutModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  logout: () => void;
  goBack?: () => void;
};

export const LogoutModal: FC<LogoutModalProps> = ({
  open,
  setOpen,
  logout,
  goBack,
}: LogoutModalProps) => {
  return (
    <Modal open={open} className="delete-ticket">
      <Fade in={open}>
        <div className="delete-ticket__content">
          <h2>Вы действительно хотите выйти из приложения?</h2>
          <div>
            <Button
              onClick={() => {
                setOpen(false);
                if (goBack) {
                  goBack();
                }
              }}
            >
              Нет
            </Button>
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
