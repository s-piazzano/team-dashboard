import React from "react"
import svgSprite from "../../../../assets/svg/sprite/symbol-defs.svg";

export const SvgIcon = ({iconName, iconColor, iconClick}) => {

  return (
    <svg
      className={'svg-icon ' + iconName}
      onClick={iconClick}
      style={{
        fill: iconColor,
        height: '26px',
        width: '26px'
      }}
    >
      <use href={`${svgSprite}#${iconName}`}></use>
    </svg>
  )
}