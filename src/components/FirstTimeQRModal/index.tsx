import { Button, Fade, Modal } from "@material-ui/core";
import React, { FC, useState } from "react";
import "./index.scss";

type FirtsTimeQRModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const FirtsTimeQRModal: FC<FirtsTimeQRModalProps> = ({
  open,
  setOpen,
}: FirtsTimeQRModalProps) => {
  const [number, setNumber] = useState<string>("");
  const [isSendClicked, setIsSendClicked] = useState<boolean>(false);

  return (
    <Modal open={open} className="first-qr-modal">
      <Fade in={open}>
        <div className="first-qr-modal__content">
          <p>
            Мы видим этот QR-код впервые. Не могли бы Вы, пожалуйста, отправить
            номер вагона транспорта, в котором находитесь?
            <span>(обычно он расположен возле передних сидений)</span>
          </p>
          {isSendClicked && !number ? (
            <h3>Пожалуйста, заполните поле</h3>
          ) : (
            <h3></h3>
          )}
          <input
            className={isSendClicked && !number ? "error" : "filled"}
            type="text"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            placeholder="Номер"
          />
          <Button onClick={() => setIsSendClicked(true)}>Отправить</Button>
        </div>
      </Fade>
    </Modal>
  );
};
