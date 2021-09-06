import React, { useState } from "react";
import "./index.scss";
import cx from "classnames";
import { useSwipeable } from "react-swipeable";
import { Button } from "@material-ui/core";
import { LogoutModal } from "../LogoutModal";

export const MainLayoutWrapper = ({ children }: any) => {
  const [isNavbarOpened, setIsNavbarOpened] = useState<boolean>(false);
  const [isLogoutModalOpened, setIsLogoutModalOpened] =
    useState<boolean>(false);

  const mainHandlers = useSwipeable({
    onSwipedRight: (e: any) => setIsNavbarOpened(true),
  });

  const navbarHandlers = useSwipeable({
    onSwipedLeft: (e: any) => setIsNavbarOpened(false),
  });

  return (
    <>
      <div>
        <div
          {...navbarHandlers}
          className={cx("main-layout__navbar", {
            opened: !!isNavbarOpened,
          })}
        >
          <Button onClick={() => setIsLogoutModalOpened(true)}>Log out</Button>
        </div>
        <div {...mainHandlers}>{children}</div>
      </div>
      <LogoutModal
        open={isLogoutModalOpened}
        setOpen={setIsLogoutModalOpened}
        logout={() => {
          setTimeout(() => {
            setIsNavbarOpened(false);
            localStorage.clear();
            window.location.href = "http://192.168.88.219:3001/";
          }, 300);
        }}
      />
    </>
  );
};
