import React, { FC, useState } from "react";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import "./index.scss";
import cx from "classnames";

interface CustomCheckboxProps {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
  executiveFunction1?: any;
  executiveFunction2?: any;
}

export const CustomCheckbox: FC<CustomCheckboxProps> = ({
  isChecked,
  setIsChecked,
  executiveFunction1,
  executiveFunction2,
}: CustomCheckboxProps) => {
  return (
    <div
      className={cx("custom-checkbox", {
        unchecked: !isChecked,
      })}
      onClick={() => {
        if (executiveFunction1 && executiveFunction2) {
          if (isChecked) {
            executiveFunction1();
          } else if (!isChecked) {
            executiveFunction2();
          }
        }

        setIsChecked(!isChecked);
      }}
    >
      <CheckCircleRoundedIcon />
    </div>
  );
};
