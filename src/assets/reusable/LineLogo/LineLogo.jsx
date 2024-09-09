import React from "react";
import barImgVer from "../../../assets/img/Rectangle 24.png";
import barImgHor from "../../../assets/img/Rectangle 23.png";
const LineLogo = ({ position, left10 }) => {
  const containerClass = `line-logo-container ${position}`;

  return (
    <div className={containerClass} style={{ left: left10 ? '10px' : 'auto' }}>
      <div className="flex flex-col gap-y-0.5 w-fit">
        <div className="flex flex-col gap-y-0.5">
          <img src={barImgVer} className="w-[13px] h-[3px]" alt="bar-line" />
          <img src={barImgVer} className="w-[13px] h-[3px]" alt="bar-line" />
          <img src={barImgVer} className="w-[13px] h-[3px]" alt="bar-line" />
        </div>
        <div className="flex justify-between">
          <img src={barImgHor} className="w-[3px] h-[32px]" alt="bar-line" />
          <img src={barImgHor} className="w-[3px] h-[32px]" alt="bar-line" />
          <img src={barImgHor} className="w-[3px] h-[32px]" alt="bar-line" />
        </div>
      </div>
    </div>
  );
};

export default LineLogo;
