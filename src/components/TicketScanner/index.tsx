import { Fade, IconButton, Modal } from "@material-ui/core";
import React, { FC } from "react";
import QrReader from "react-qr-reader";
import "./index.scss";
import ClearIcon from "@material-ui/icons/Clear";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";

interface TicketScannerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const TicketScanner: FC<TicketScannerProps> = ({
  open,
  setOpen,
}: TicketScannerProps) => {
  const handleScan = (data: any) => {
    console.log(data);
    if (data) {
      setOpen(false);
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <Modal open={open} className="ticket-scanner">
      <Fade in={open}>
        <div>
          <div className="ticket-scanner__top">
            <div>
              <IconButton onClick={() => setOpen(false)}>
                <ClearIcon />
              </IconButton>
            </div>
            <p>Сканер</p>
            <div>
              <IconButton>
                <CropOriginalIcon />
              </IconButton>
            </div>
          </div>
          <QrReader delay={500} onError={handleError} onScan={handleScan} />
        </div>
      </Fade>
    </Modal>
  );
};
