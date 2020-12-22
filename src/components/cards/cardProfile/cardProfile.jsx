import React from "react"
import './cardProfile.scss';
import { SvgIcon } from '../../buttons-indicators/svg-icon/svg-icon';

export const CardProfile = ({
  title,
  description,
  imageUrl,
  profileLinks = []
}) => {
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
            <a href="" className="social">
              <SvgIcon iconName="icon-linkedin" />
            </a>
            <a href="" className="social">
              <SvgIcon iconName="icon-github" />
            </a>
            <a href="" className="social">
              <SvgIcon iconName="icon-gitlab" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}