import React from "react"
import "./cardProfile.scss"
import { SvgIcon } from "../../buttons-indicators/svg-icon/svg-icon"

export const CardProfile = ({
  title,
  description,
  imageUrl,
  profileLinks = [],
  handleSocialLink,
}: any) => {
  return (
    <div className="cardProfile">
      <div className="card-container">
        <div className="image-container">
          <img src={imageUrl} alt="pino!" />
        </div>

        <div className="card-content">
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            <p>{description}</p>
          </div>
        </div>

        <div className="social-container">
          <div className="social-link">
            {profileLinks.map((link: any, i: number) => (
              <div className="social" key={i}>
                <SvgIcon
                  iconName={link.iconName}
                  iconClick={() => handleSocialLink(link.url)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
