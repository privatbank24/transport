import { Fade } from "@material-ui/core";
import { useState } from "react";
import { Footer } from "../../components/Footer";
import { TicketScanner } from "../../components/TicketScanner";
import { ReactComponent as ScanIcon } from "../../images/scan.svg";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import { ReactComponent as HomeIcon } from "../../images/home.svg";
import { ReactComponent as InboxIcon } from "../../images/inbox.svg";
import "./index.scss";

export const Instruction = () => {
  const [isQRScannerOpened, setIsQRScannerOpened] = useState(false);

  return (
    <>
      <Fade in>
        <div className="instruction">
          <div className="instruction__content">
            <div>
              <p>
                Чтобы купить билет, нажмите на центральную кнопку со сканнером и
                отсканируйте QR-код. Далее Вы попадете в меню покупки, в котором
                нужно будет ввести номер вагона (если его нету у в базе) и
                количество билетов.
              </p>
              <div>
                <span id="sec1">
                  <ScanIcon />
                </span>
              </div>
            </div>
            <div>
              <p>
                Чтобы посмотреть список купленных билетов нажмите на 4 кнопку.
                <br />
                Если Вы хотите удалить билет, просто зажмите его и появится окно
                для удаления
              </p>
              <div>
                <span id="sec2">
                  <InboxIcon />
                </span>
              </div>
            </div>
            <div>
              <p>Для возвращения на главную страницу нажмите первую кнопку.</p>
              <div>
                <span id="sec3">
                  <HomeIcon />
                </span>
              </div>
            </div>
          </div>
          <Footer openScanner={() => setIsQRScannerOpened(true)} />
        </div>
      </Fade>
      <TicketScanner open={isQRScannerOpened} setOpen={setIsQRScannerOpened} />
    </>
  );
};
