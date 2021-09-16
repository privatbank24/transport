import { IconButton } from "@material-ui/core";
import { FC } from "react";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import { ReactComponent as HomeIcon } from "../../images/home.svg";
import { ReactComponent as ScanIcon } from "../../images/scan.svg";
import { ReactComponent as InboxIcon } from "../../images/inbox.svg";
import "./index.scss";
import { useHistory } from "react-router";
import { ROUTES } from "../../utils/routes";

interface FooterProps {
  openScanner: () => void;
}

export const Footer: FC<FooterProps> = ({ openScanner }) => {
  const history = useHistory();

  return (
    <footer className="footer">
      <IconButton onClick={() => history.push(ROUTES.DASHBOARD)}>
        <HomeIcon />
      </IconButton>
      <IconButton className="apps">
        <section>
          <div id="sec1" />
          <div id="sec2" />
          <div id="sec3" />
          <div id="sec4" />
        </section>
      </IconButton>
      <IconButton onClick={openScanner}>
        <ScanIcon />
      </IconButton>
      <IconButton onClick={() => history.push(ROUTES.MY_TICKETS)}>
        <InboxIcon />
      </IconButton>
      <IconButton onClick={() => history.push(ROUTES.INSTRUCTION)}>
        <NotificationsNoneOutlinedIcon />
      </IconButton>
    </footer>
  );
};
