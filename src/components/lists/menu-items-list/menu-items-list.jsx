import React from "react"
import { SvgIcon } from "../../buttons-indicators/svg-icon/svg-icon";
import './menu-items-list.scss';

export const MenuItemsList = ({items = []}) => {
  return (
    <div className="items-container">
      {items.map((item, i) => 
        <button className="menu-item" key={i}>
          <SvgIcon iconColor='#9a9b9c' iconName={item.icon}></SvgIcon><p className="item-label">{item.name}</p>
        </button>
      )}
    </div>
  )
}