import React, { FC } from "react";
import card1 from "../../images/card (1).jpg";
import card2 from "../../images/card (2).jpg";
import card3 from "../../images/card (3).jpg";
import card4 from "../../images/card (4).jpg";
import card5 from "../../images/card (5).jpg";
import card6 from "../../images/card (6).jpg";
import card7 from "../../images/card (7).jpg";
import card8 from "../../images/card (8).jpg";
import card9 from "../../images/card (9).jpg";
import card10 from "../../images/card (10).jpg";
import card11 from "../../images/card (11).jpg";
import card12 from "../../images/card (12).jpg";
import card13 from "../../images/card (13).jpg";
import card14 from "../../images/card (14).jpg";
import card15 from "../../images/card (15).jpg";
import card16 from "../../images/card (16).jpg";
import card17 from "../../images/card (17).jpg";
import card18 from "../../images/card (18).jpg";
import card19 from "../../images/card (19).jpg";
import card20 from "../../images/card (20).jpg";
import card21 from "../../images/card (21).jpg";

export const CardImageSwitch = (index: string) => {
  return index === "1"
    ? card1
    : index === "2"
    ? card2
    : index === "3"
    ? card3
    : index === "4"
    ? card4
    : index === "5"
    ? card5
    : index === "6"
    ? card6
    : index === "7"
    ? card7
    : index === "8"
    ? card8
    : index === "9"
    ? card9
    : index === "10"
    ? card10
    : index === "11"
    ? card11
    : index === "12"
    ? card12
    : index === "13"
    ? card13
    : index === "14"
    ? card14
    : index === "15"
    ? card15
    : index === "16"
    ? card16
    : index === "17"
    ? card17
    : index === "18"
    ? card18
    : index === "19"
    ? card19
    : index === "20"
    ? card20
    : card21;
};
