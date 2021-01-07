import React from 'react';
import './cardProfile.scss';
import { SvgIcon } from '../../buttons-indicators/svg-icon/svg-icon';

export interface CardProfileProps {
  title: string;
  description: string;
  imageUrl: string;
  profileLinks: Array<any>;
  handleSocialLink: (url: string) => void;
}

export const CardProfile: React.FC<CardProfileProps> = ({
  title,
  description,
  imageUrl,
  profileLinks = [],
  handleSocialLink,
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
            {profileLinks.map((link: any, i: number) => (
              <div className="social" key={i}>
                <SvgIcon
                  iconName={link.icon}
                  iconClick={() => handleSocialLink(link.url)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
