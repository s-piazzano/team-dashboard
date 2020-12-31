import React from "react";
import { SvgIcon } from "../../buttons-indicators/svg-icon/svg-icon";
import "./menu-items-list.scss";

export const MenuItemsList = ({ items = [], mode, action }: any) => {
  const isExpanded = mode === "expanded";

  return (
    <div className={`items-container ${isExpanded ? "" : "narrow"}`}>
      {items.map((item: any, i: number) => (
        <button
          className={`menu-item ${item.isSelected ? "clicked" : ""}`}
          key={i}
          onClick={() => action(item.section.name)}
        >
          <div className="item-icon">
            {
              <SvgIcon
                iconColor={item.isSelected ? "#a90926" : "#9a9b9c"}
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
