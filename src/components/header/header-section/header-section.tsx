import React from 'react';
import './header-section.scss';

export const HeaderSection = ({ title, description }: any) => {
  const [first, second, third, ...rest] = Array.from(title);

  return (
    <div className="header-section">
      <h2>
        {first}
        <span>{second}</span>
        {third}
        {rest}
      </h2>
      <p>{description}</p>
    </div>
  );
};
