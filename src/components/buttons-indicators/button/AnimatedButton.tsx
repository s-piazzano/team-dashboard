import React from 'react';
import './AnimatedButton.scss';

export interface AnimatedButtonProps {
  /**
   * Is action of our button
   */
  action: () => void;
  /**
   * Is placeholder of the our button
   */
  label: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  action = () => console.log('ciao'),
  label = 'Pinco',
}) => {
  return (
    <div className="head-button">
      <button onClick={action}>
        <svg>
          <rect></rect>
        </svg>
        {label}
      </button>
    </div>
  );
};
