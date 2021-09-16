import { Fade, IconButton, Modal } from "@material-ui/core";
import React, { FC, useEffect, useRef, useState } from "react";
import QrReader from "react-qr-reader";
import "./index.scss";
import { toast } from "react-toastify";
import ClearIcon from "@material-ui/icons/Clear";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import { ROUTES } from "../../utils/routes";
import { useHistory } from "react-router-dom";
import { ErrorModal } from "../ErrorModal";
import { LoaderLogo } from "../LoaderLogo";

interface TicketScannerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const TicketScanner: FC<TicketScannerProps> = ({
  open,
  setOpen,
}: TicketScannerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const history = useHistory();
  const qrReader = useRef<any>(null);
  const [isLegacyModeActivated, setIsLegacyModeActivated] =
    useState<boolean>(false);

  const notify = () =>
    toast.error(() => (
      <div className="toast__error-qr">
        <p>Ошибка при обработке QR кода.</p>
      </div>
    ));

  const handleScan = (data: any) => {
    if (data) {
      if (
        !data.includes("htt") &&
        !data.includes("com") &&
        !data.includes("ua")
      ) {
        localStorage.setItem("currentQR", data);
        setIsLoading(false);
        setOpen(false);
        history.push(ROUTES.PAY_FOR_TICKET);
      } else {
        setIsLoading(false);
        setOpen(false);
        setIsError(true);
      }
    }
  };

  const handleError = (err: any) => {
    notify();
    setIsLegacyModeActivated(false);
    setOpen(false);
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

  useEffect(() => {
    if (isError) {
      console.log("123");
      notify();
      setIsLegacyModeActivated(false);
      setOpen(false);
    }
  }, [isError]);

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
              resolution={1000}
              ref={qrReader}
              delay={500}
              onError={handleError}
              onScan={handleScan}
              legacyMode={isLegacyModeActivated}
              onImageLoad={() => {
                setIsLoading(true);
                const currentLocation = window.location.href;
                setTimeout(() => {
                  if (currentLocation === window.location.href) {
                    setIsLoading(false);
                    setOpen(false);
                    notify();
                    setIsLegacyModeActivated(false);
                  }
                }, 3500);
              }}
            />
          </div>
        </Fade>
      </Modal>
      <LoaderLogo qr={true} open={isLoading} />
    </>
  );
};
