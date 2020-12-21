import React from "react"

export const LayoutWithSidebar = ({children}) => {

  return (
    <div className="layout">
      <aside className="sidebar"></aside>
      <main className="content"></main>
    </div>
  )
}