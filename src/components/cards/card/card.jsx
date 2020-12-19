import React from "react"
import './card.scss';

export const Card = () => {
  const imageUrl = 'https://picsum.photos/300/200';
	const title = 'CardTitle';
  const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a eros ut massa commodo tristique vitae finibus mi. Interdum et.';
   
  return (
    <button className="card">
      <div className="card-container">
        <div className="image-container">
          <img src={imageUrl} alt="pino!" />
        </div>
        <div className="card-content">
          <div className="card-title">
          <h3>{title}</h3>
          </div>
          <div className="card-body">
            <p>{body}</p>
          </div>
        </div>
      
        <div className="btn">
          <button>
            <a>
              View More
            </a>
          </button>
        </div>
      </div>
    </button>
  )
}