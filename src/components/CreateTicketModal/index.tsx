import { Button, Fade, IconButton, Modal } from "@material-ui/core";
import React, { FC, useState } from "react";
import "./index.scss";
import ClearIcon from "@material-ui/icons/Clear";

type CreateTicketModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const CreateTicketModal: FC<CreateTicketModalProps> = ({
  open,
  setOpen,
}: CreateTicketModalProps) => {
  const [price, setPrice] = useState<number>(8);
  const [quantity, setQuantity] = useState<number>(1);
  const [vagon, setVagon] = useState<string>("276");
  const tickets: any = JSON.parse(localStorage.getItem("tickets")!);

  const createTicket = () => {
    const currDate = new Date();
    let ticket = {
      date: currDate,
      quantity,
      price,
      vagon,
    };
    const newArr = tickets;
    newArr.push(ticket);
    localStorage.setItem("tickets", JSON.stringify(newArr));
    setOpen(false);
  };

  return (
    <Modal open={open} className="create-ticket">
      <Fade in={open}>
        <div className="create-ticket__content">
          <div className="create-ticket__content_top">
            <div />
            <IconButton onClick={() => setOpen(false)}>
              <ClearIcon />
            </IconButton>
          </div>
          <div className="create-ticket__content_main">
            <label htmlFor="price">Цена</label>
            <input
              value={price}
              type="number"
              id="price"
              onChange={(e: any) => setPrice(e.target.value)}
            />
            <label>Количество</label>
            <section>
              <Button
                disableRipple
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              >
                -
              </Button>
              <div>{quantity}</div>
              <Button disableRipple onClick={() => setQuantity(quantity + 1)}>
                +
              </Button>
            </section>
            <label htmlFor="vagon">Номер вагона</label>
            <input
              value={vagon}
              type="text"
              id="vagon"
              onChange={(e: any) => setVagon(e.target.value)}
            />
          </div>
          <div className="create-ticket__content_bottom">
            <Button onClick={createTicket}>Оплатить</Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};
