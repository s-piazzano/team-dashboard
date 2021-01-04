import React from "react";
import "./AnimatedButton.scss";

export const AnimatedButton = ({ action, label }: any) => {
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
