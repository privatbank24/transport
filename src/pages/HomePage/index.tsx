import { Fade } from "@material-ui/core";
import { useEffect, useState } from "react";
import { LoaderLogo } from "../../components/LoaderLogo";

export const HomePage = () => {
  const [isStartModalShown, setIsStartModalShown] = useState<boolean>(
    JSON.parse(localStorage.getItem("isLoadingModalShown")!)
  );

  useEffect(() => {
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
          <div className="dashboard__main">
            <div className="dashboard__main_top">
              <div>
                <img src="" alt="" />
                <p>Кошелек</p>
              </div>
              <button>{">"}</button>
            </div>
            <div className="dashboard__main_cards">
              {/* start */}

              {/* end */}
            </div>
          </div>
          <div className="dashboard__bottom"></div>
        </div>
      </Fade>
      <LoaderLogo open={isStartModalShown} login={true} />
    </>
  );
};
