import React from 'react';
import { SvgIcon } from '../../buttons-indicators/svg-icon/svg-icon';
import './menu-items-list.scss';

export const MenuItemsList = ({ items = [], mode, action }: any) => {
  const isExpanded = mode === 'expanded';

  const divRef = React.useRef<HTMLDivElement>(null);

  const computedStyles: { regular?: string; selected?: string } = {};

  // TODO refactor to avoid first redner issue
  if (divRef.current) {
    const computedValues = getComputedStyle(divRef.current);

    computedStyles.selected = computedValues.getPropertyValue(
      '--SECONDARY_COLOR'
    );
    computedStyles.regular = computedValues.getPropertyValue('--LIGHT_COLOR');
  }
  return (
    <div
      ref={divRef}
      className={`items-container ${isExpanded ? '' : 'narrow'}`}
    >
      {items.map((item: any, i: number) => (
        <button
          className={`menu-item ${item.isSelected ? 'clicked' : ''}`}
          key={i}
          onClick={() => action(item.section.name)}
        >
          <div className="item-icon">
            {
              <SvgIcon
                iconColor={
                  item.isSelected
                    ? computedStyles.selected || 'black'
                    : computedStyles.regular || 'white'
                }
                iconName={item.icon}
              ></SvgIcon>
            }
          </div>
          <p className="item-label">{item.name}</p>
        </button>
      ))}
    </div>
  );
};
