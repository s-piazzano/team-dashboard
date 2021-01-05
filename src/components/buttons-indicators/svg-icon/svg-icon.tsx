import React from 'react';
import svgSprite from '../../../../assets/svg/sprite/symbol-defs.svg';
import './svg-icon.scss';

export interface SvgIconProps {
  /**
   * Is name of the our icon
   */
  iconName: string;
  /**
   * What color to use
   */
  iconColor?: string;
  /**
   * Optional click handler
   */
  iconClick?: () => void;
}
export const SvgIcon: React.FC<SvgIconProps> = ({
  iconName = 'icon-github',
  iconColor,
  iconClick,
}) => {
  return (
    <svg
      className={'svg-icon ' + iconName}
      onClick={iconClick}
      style={{
        fill: iconColor,
        height: '26px',
        width: '26px',
        cursor: 'pointer',
      }}
    >
      <use href={`${svgSprite}#${iconName}`}></use>
    </svg>
  );
};
