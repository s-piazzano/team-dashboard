import React from "react"
import "./card.scss"

export const Card = ({ title, description, imageUrl, projectUrl }: any) => {
  const handleProjectLink = () => {
    window.open(projectUrl)
  }

  return (
    <button className="card" onClick={handleProjectLink}>
      <div className="card-container">
        <div className="image-container">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </button>
  )
}
