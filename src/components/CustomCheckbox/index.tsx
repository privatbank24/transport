import React, { FC, useState } from "react";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import "./index.scss";
import cx from "classnames";

interface CustomCheckboxProps {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
}

export const CustomCheckbox: FC<CustomCheckboxProps> = ({
  isChecked,
  setIsChecked,
}: CustomCheckboxProps) => {
  return (
    <div
      className={cx("custom-checkbox", {
        unchecked: !!isChecked,
      })}
      onClick={() => setIsChecked(!isChecked)}
    >
      <CheckCircleRoundedIcon />
    </div>
  );
};
