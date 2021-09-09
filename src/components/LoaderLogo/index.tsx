import React, { FC } from "react";
import { Fade, Modal } from "@material-ui/core";
import { ReactComponent as MainLogo } from "../../images/logo.svg";
import "./index.scss";

interface LoaderLogoProps {
  open: boolean;
  text?: string;
}

export const LoaderLogo: FC<LoaderLogoProps> = ({
  open,
  text,
}: LoaderLogoProps) => {
  return (
    <Modal className="loader-logo" open={open}>
      <Fade in={open}>
        <div>
          <svg
            id="anim"
            viewBox="192.793 84.802 99.385 99.715"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="main"
              id="main-top"
              d="M 200.141 92.356 L 284.379 92.356"
              fill="none"
              //   stroke="red"
              stroke-width="10"
              stroke-linecap="square"
            />
            <path
              className="main"
              id="main-right"
              d="M 242.26 134.475 L 326.498 134.475"
              fill="none"
              //   stroke="orange"
              stroke-width="10"
              stroke-linecap="square"
              transform="matrix(0, 1, -1, 0, 418.853996, -149.903984)"
            />
            <path
              className="main"
              id="main-bottom"
              d=""
              fill="none"
              //   stroke="yellow"
              stroke-width="10"
              stroke-linecap="square"
            />
            <path
              className="main"
              id="main-left"
              d="M 200.141 127.338 L 200.141 92.356"
              fill="none"
              //   stroke="white"
              stroke-width="10"
              stroke-linecap="square"
            />
            <path
              className="main"
              id="main-bottom"
              d="M 266.888 194.085 L 266.888 159.103"
              fill="none"
              //   stroke="yellow"
              stroke-width="10"
              stroke-linecap="square"
              transform="matrix(0, 1, -1, 0, 443.482002, -90.293999)"
            />
            <path
              className="main"
              id="main-curve"
              d="M 200.141 127.338 C 225.47 125.877 249.064 151.538 249.397 176.594"
              fill="none"
              //   stroke="green"
              stroke-width="10"
            />
            <path
              className="sub"
              id="sub-bottom"
              d="M 200.141 176.594 L 224.769 176.594"
              fill="none"
              //   stroke="blue"
              stroke-width="10"
              stroke-linecap="square"
            />
            <path
              className="sub"
              id="sub-right"
              d="M 212.455 164.28 L 237.083 164.28"
              fill="none"
              //   stroke="brown"
              stroke-width="10"
              stroke-linecap="square"
              transform="matrix(0, 1, -1, 0, 389.048996, -60.488998)"
            />
            <path
              className="sub"
              id="sub-top"
              d="M 200.141 151.936 L 224.769 151.936"
              fill="none"
              //   stroke="purple"
              stroke-width="10"
              stroke-linecap="square"
              transform="matrix(-1, 0, 0, -1, 424.910004, 303.872009)"
            />
            <path
              className="sub"
              id="sub-left"
              d="M 187.827 164.25 L 212.455 164.25"
              fill="none"
              //   stroke="skyblue"
              stroke-width="10"
              stroke-linecap="square"
              transform="matrix(0, 1, -1, 0, 364.390999, -35.890999)"
            />
          </svg>
          {text && <p>{text}</p>}
        </div>
      </Fade>
    </Modal>
  );
};
