import { Fade, IconButton, Modal } from "@material-ui/core";
import React, { FC, useEffect, useRef, useState } from "react";
import QrReader from "react-qr-reader";
import "./index.scss";
import ClearIcon from "@material-ui/icons/Clear";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import { ROUTES } from "../../utils/routes";
import { useHistory } from "react-router-dom";
import { ErrorModal } from "../ErrorModal";

interface TicketScannerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const TicketScanner: FC<TicketScannerProps> = ({
  open,
  setOpen,
}: TicketScannerProps) => {
  const [isError, setIsError] = useState<boolean>(false);
  const history = useHistory();
  const qrReader = useRef<any>(null);
  const [isLegacyModeActivated, setIsLegacyModeActivated] =
    useState<boolean>(false);

  const handleScan = (data: any) => {
    if (data) {
      if (
        !data.includes("htt") &&
        !data.includes("com") &&
        !data.includes("ua")
      ) {
        localStorage.setItem("currentQR", data);
        setOpen(false);
        history.push(ROUTES.PAY_FOR_TICKET);
      } else {
        setOpen(false);
        setIsError(true);
      }
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  const openImageDialog = () => {
    if (qrReader && qrReader.current) {
      qrReader.current.openImageDialog();
    }
  };

  useEffect(() => {
    if (isLegacyModeActivated) openImageDialog();
  }, [isLegacyModeActivated]);

  useEffect(() => {
    setIsLegacyModeActivated(false);
  }, [open]);

  return (
    <>
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
                <IconButton onClick={() => setIsLegacyModeActivated(true)}>
                  <CropOriginalIcon />
                </IconButton>
              </div>
            </div>
            <div className="ticket-scanner__frame">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <QrReader
              ref={qrReader}
              delay={500}
              onError={handleError}
              onScan={handleScan}
              legacyMode={isLegacyModeActivated}
            />
          </div>
        </Fade>
      </Modal>
      <ErrorModal
        openCamera={() => setOpen(true)}
        open={isError}
        setOpen={setIsError}
      />
    </>
  );
};
