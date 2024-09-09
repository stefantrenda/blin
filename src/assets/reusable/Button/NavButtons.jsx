import React from "react";
import "./Button.css";

const NavButtons = () => {
  return (
    <>
      <div class="nav-button">
        <svg
          width="10"
          height="17"
          viewBox="0 0 10 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.34328 8.5L10 1.70609L8.32836 0L0 8.5L8.32836 17L10 15.2939L3.34328 8.5Z"
            fill="white"
            className="arrowSVG"
          />
        </svg>
      </div>
      <div class="nav-button">
        <svg
          width="10"
          height="17"
          viewBox="0 0 10 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            className="arrowSVG"
            d="M6.65672 8.5L0 15.2939L1.67164 17L10 8.5L1.67164 0L0 1.70609L6.65672 8.5Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
};

export default NavButtons;
