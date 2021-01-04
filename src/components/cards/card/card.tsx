import React from 'react';
import './card.scss';

export interface CardProps {
  /**
   * The title of the card
   */
  title: string;
  /**
   * The description of the card and of the project
   */
  description: string;
  /**
   * The image url of the card
   */
  imageUrl: string;
  /**
   * The project url of the card
   */
  projectUrl: string;
}

export const Card: React.FC<CardProps> = ({
  title = 'Card title',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare leo at eleifend posuere. Interdum et malesuada fames ac ante.',
  imageUrl = 'https://picsum.photos/300/200',
  projectUrl = 'https://dattilo.netlify.app/',
}) => {
  const handleProjectLink = () => {
    window.open(projectUrl);
  };

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
  );
};
