import { IconButton } from "@material-ui/core";
import { FC } from "react";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import { ReactComponent as HomeIcon } from "../../images/home.svg";
import { ReactComponent as AppIcon } from "../../images/apps.svg";
import { ReactComponent as ScanIcon } from "../../images/scan.svg";
import { ReactComponent as InboxIcon } from "../../images/inbox.svg";
import "./index.scss";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <IconButton>
        <HomeIcon />
      </IconButton>
      <IconButton>
        <AppIcon />
      </IconButton>
      <IconButton>
        <ScanIcon />
      </IconButton>
      <IconButton>
        <InboxIcon />
      </IconButton>
      <IconButton>
        <NotificationsNoneOutlinedIcon />
      </IconButton>
    </footer>
  );
};
