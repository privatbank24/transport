import { Fade } from "@material-ui/core";
import React from "react";

export const HomePage = () => {
  return (
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
  );
};
