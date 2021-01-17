import React from "react";
import "./AnimatedButton.scss";

export const AnimatedButton = () => {
  return (
    <div className="button-wrapper">
      <div className="head-button">
        <button>
          <svg>
            <rect></rect>
          </svg>
          Button
        </button>
      </div>
    </div>
  );
};
