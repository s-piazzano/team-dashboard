import React from "react";
import svgSprite from "../../../../assets/svg/sprite/symbol-defs.svg";
import "./svg-icon.scss";

export const SvgIcon = ({ iconName, iconColor, iconClick }: any) => {
  return (
    <svg
      className={"svg-icon " + iconName}
      onClick={iconClick}
      style={{
        fill: iconColor,
        height: "26px",
        width: "26px",
        cursor: "pointer",
      }}
    >
      <use href={`${svgSprite}#${iconName}`}></use>
    </svg>
  );
};
