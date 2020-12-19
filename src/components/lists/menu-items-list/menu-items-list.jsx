import React from "react"
import { SvgIcon } from "../../buttons-indicators/svg-icon/svg-icon";
import './menu-items-list.scss';

export const MenuItemsList = ({items = [], mode}) => {

 const isExpanded = mode === 'expanded'
 const [active, setActive] = React.useState(undefined)
 
  return (
    <div className={`items-container ${isExpanded ? '' : 'narrow'}`}>
      {items.map((item, i) => 
        <a
          href={`#${item.value}`}
          className={`menu-item ${item.value === active ? 'clicked' : ''}`}
          key={i}
          onClick={() => setActive(item.value)}
        >
          <div className="item-icon">
            <SvgIcon
              iconColor={item.value === active ? '#a90926' : '#9a9b9c'} iconName={item.icon}>
            </SvgIcon>
          </div>
          <p className="item-label">{item.name}</p>
        </a>
      )}
    </div>
  )
}