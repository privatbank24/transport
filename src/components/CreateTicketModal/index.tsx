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
          </div>
          <div className="create-ticket__content_bottom">
            <Button>Оплатить</Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};
