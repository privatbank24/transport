import { Fade, IconButton } from "@material-ui/core";
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

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isStartModalShown, setIsStartModalShown] = useState<boolean>(
    JSON.parse(localStorage.getItem("isLoadingModalShown")!)
  );
  const userCards = JSON.parse(localStorage.getItem("userCards")!);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  useEffect(() => {
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
  }, []);

  return (
    <>
      <Fade in>
        <div className="dashboard">
          <div className="dashboard__top">
            <div className="dashboard__top_section">
              <IconButton className="account">
                <PersonIcon />
              </IconButton>
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
                <p>Кошелек</p>
              </div>
              <NavigateNextOutlinedIcon />
            </div>
            {!!userCards && (
              <div className="dashboard__main_cards">
                <Carousel
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
                          <Card name="Карта универсальная" card={item} />
                        ) : (
                          <Card
                            name="Карта для выплат"
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
          <div className="dashboard__bottom">bottom</div>
        </div>
      </Fade>
      <LoaderLogo open={isStartModalShown || isLoading} login={true} />
    </>
  );
};
