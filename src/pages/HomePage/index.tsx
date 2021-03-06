import { Button, Fade, IconButton, Menu, MenuItem } from "@material-ui/core";
import { Fragment, useEffect, useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";
import { LoaderLogo } from "../../components/LoaderLogo";
import "./index.scss";
import { Card } from "../../components/Card";
import { generateCards } from "../../actions/generateCards";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSwipeable } from "react-swipeable";
import cx from "classnames";
import PhoneIphoneSharpIcon from "@material-ui/icons/PhoneIphoneSharp";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { ReactComponent as Hryvnia } from "../../images/hryvnia.svg";
import { Footer } from "../../components/Footer";
import { TicketScanner } from "../../components/TicketScanner";
import { changePageTitle } from "../../utils/changePageTitle";
import { LogoutModal } from "../../components/LogoutModal";
import { logout } from "../../actions/logout";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isStartModalShown, setIsStartModalShown] = useState<boolean>(
    JSON.parse(localStorage.getItem("isLoadingModalShown")!)
  );
  const userCards = JSON.parse(localStorage.getItem("userCards")!);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [areOptionsShown, setAreOptionsShown] = useState<boolean>(false);
  const [isQRScannerOpened, setIsQRScannerOpened] = useState<boolean>(false);
  const [isLogoutModalOpened, setIsLogoutModalOpened] =
    useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handlers = useSwipeable({
    onSwipedUp: (e: any) => setAreOptionsShown(true),
    onSwipedDown: (e: any) => setAreOptionsShown(false),
  });

  useEffect(() => {
    changePageTitle("home");
    if (!userCards) {
      setIsLoading(true);
      generateCards();
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
    if (isStartModalShown) {
      setTimeout(() => {
        setIsStartModalShown(false);
        localStorage.setItem("isLoadingModalShown", "false");
      }, 1500);
    }
  }, [isStartModalShown, userCards]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Fade in>
        <div className="dashboard">
          <div className="dashboard__top">
            <div className="dashboard__top_section">
              <IconButton className="account" onClick={openMenu}>
                <PersonIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setIsLogoutModalOpened(true);
                  }}
                >
                  ??????????
                </MenuItem>
              </Menu>
            </div>
            <p className="money">
              <span>$</span> 26.62 <span>/</span> 26.73
            </p>
            <div className="dashboard__top_section">
              <IconButton className="likes">
                <ThumbUpAltIcon />
              </IconButton>
              <IconButton className="messages">
                <ChatBubbleOutlineOutlinedIcon />
              </IconButton>
            </div>
          </div>
          <div className="dashboard__main">
            <div className="dashboard__main_top">
              <div>
                <AccountBalanceWalletOutlinedIcon />
                <p>??????????????</p>
              </div>
              <NavigateNextOutlinedIcon />
            </div>
            {!!userCards && (
              <div className="dashboard__main_cards">
                <Carousel
                  interval={100000000}
                  autoPlay={false}
                  showArrows={false}
                  showStatus={false}
                  showIndicators={false}
                  showThumbs={false}
                  onChange={(e) => setActiveCardIndex(e)}
                >
                  {userCards.map((item: any, index: number) => {
                    return (
                      <Fragment key={item.cardNumber + index}>
                        {index === 0 ? (
                          <Card name="?????????? ??????????????????????????" card={item} />
                        ) : (
                          <Card
                            name="?????????? ?????? ????????????"
                            card={item}
                            type="visa"
                          />
                        )}
                      </Fragment>
                    );
                  })}
                </Carousel>
              </div>
            )}
            <div className="dashboard__main_dots">
              <span className={activeCardIndex === 0 ? "active" : ""} />
              <span className={activeCardIndex === 1 ? "active" : ""} />
            </div>
          </div>
          <div
            className={cx("dashboard__bottom", {
              open: areOptionsShown,
            })}
            {...handlers}
          >
            <div className="dashboard__bottom_line" />
            <div className="dashboard__bottom_options">
              <div>
                <Button>
                  <PhoneIphoneSharpIcon />
                </Button>
                <p>???????????????????? ????????????????????</p>
              </div>
              <div>
                <Button>
                  <PaymentOutlinedIcon />
                </Button>
                <p>
                  ?????????????? <br /> ???? ??????????
                </p>
              </div>
              <div>
                <Button>
                  <Hryvnia />
                </Button>
                <p>??????????????</p>
              </div>
              <div>
                <Button>
                  <AddRoundedIcon />
                </Button>
                <p>????????????????</p>
              </div>
            </div>
          </div>
          <Footer openScanner={() => setIsQRScannerOpened(true)} />
        </div>
      </Fade>
      <TicketScanner open={isQRScannerOpened} setOpen={setIsQRScannerOpened} />
      <LoaderLogo open={isStartModalShown || isLoading} login={true} />
      <LogoutModal
        open={isLogoutModalOpened}
        setOpen={setIsLogoutModalOpened}
        logout={() => {
          setTimeout(() => {
            logout();
          }, 300);
        }}
      />
    </>
  );
};
