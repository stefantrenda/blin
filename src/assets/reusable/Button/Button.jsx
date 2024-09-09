import React from "react";
import "./Button.css";
import LineLogo from "../LineLogo/LineLogo";
import LineLogoRotated from "../LineLogo/LineLogoRotated";

const Button = () => {
  return (
    <div className="button-container">
      <LineLogo position="top" />
      <LineLogo position="top right" />
      <a href="your-link.html" className="read-more-button">
        Read more
      </a>
      <LineLogoRotated position="bottom left"  />
      <LineLogoRotated position="bottom right-end"  />
    </div>
  );
};

export default Button;
