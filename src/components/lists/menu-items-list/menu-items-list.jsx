import React from "react"
import { SvgIcon } from "../../buttons-indicators/svg-icon/svg-icon";
import './menu-items-list.scss';

export const MenuItemsList = ({items = [], mode, action}) => {
 const isExpanded = mode === 'expanded'
 
  return (
    <div className={`items-container ${isExpanded ? '' : 'narrow'}`}>
      {items.map((item, i) => 
        <button
          className={`menu-item ${item.isSelected ? 'clicked' : ''}`}
          key={i}
          onClick={() => action(item.value)}
        >
          <div className="item-icon">
            {<SvgIcon
              iconColor={item.isSelected ? '#a90926' : '#9a9b9c'} iconName={item.icon}>
            </SvgIcon> }
          </div>
          <p className="item-label">{item.name}</p>
        </button>
      )}
    </div>
  )
}