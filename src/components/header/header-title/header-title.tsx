import React from "react"
import "./header-title.scss"

export const HeaderTitle = ({ logoUrl, title, subtitle, mode }: any) => {
  const isExpanded = mode === "expanded"

  return (
    <div className="header">
      <img
        src={logoUrl}
        alt=""
        style={{
          width: isExpanded ? "64px" : "40px",
          height: isExpanded ? "64px" : "40px",
        }}
      />
      {isExpanded ? (
        <div className="title">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      ) : null}
    </div>
  )
}
