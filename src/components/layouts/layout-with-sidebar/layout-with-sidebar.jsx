import React, { Children } from "react"

export const LayoutWithSidebar = ({children, sidebarIsOpen = false}) => {

  const renderSidebar = (child) => {
    return (
      <aside className="page-sidebar">{child}</aside>
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
          child.props.className === 'page-sidebar'
            ? renderSidebar(child)
            : renderContent(child)
        );
      })} 
    </div>
  )
}