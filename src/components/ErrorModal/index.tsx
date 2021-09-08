import { Button, Fade, Modal } from "@material-ui/core";
import React, { FC } from "react";
import "./index.scss";

interface ErrorModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  openCamera: () => void;
}

export const ErrorModal: FC<ErrorModalProps> = ({
  open,
  setOpen,
  openCamera,
}: ErrorModalProps) => {
  return (
    <Modal open={open} className="error-qr-modal">
      <Fade in={open}>
        <div className="error-qr-modal__content">
          <p>Случилась ошибка. Неправильный QR-код.</p>
          <div>
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              Закрыть
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
                openCamera();
              }}
            >
              Попробовать еще раз
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};
