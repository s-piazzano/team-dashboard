import React, { Children } from "react"
import { SvgIcon } from "../../buttons-indicators/svg-icon/svg-icon"

import './layout-with-sidebar.scss';

export const LayoutWithSidebar = ({children, sidebarIsOpen, layoutAction}) => {

  const renderSidebar = (child) => {
    return (
      <aside className={`sidebar-container ${sidebarIsOpen ? 'expanded' : 'narrow'}`}>
        <div className={`sidebar-toggle ${sidebarIsOpen ? 'icon-left' : 'icon-right'}`}>
          <SvgIcon
            iconName="icon-arrow-circle-right"
            iconClick={layoutAction}
          />
        </div>
          {child}
      </aside>
    )
  }

  const renderContent = (child) => {
    return (
      <main className={`page-content ${sidebarIsOpen ? 'expanded' : 'narrow'}`}>
        {child}
      </main>
    )
  }

  return (
    <div className="layout">
      {Children.map(children, child => {

        return (
          child.props.className === 'section-sidebar'
            ? renderSidebar(child)
            : renderContent(child)
        );
      })} 
    </div>
  )
}