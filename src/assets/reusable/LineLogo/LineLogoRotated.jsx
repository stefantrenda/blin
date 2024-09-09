import React from "react";
import barImgVer from "../../../assets/img/Rectangle 24.png";
import barImgHor from "../../../assets/img/Rectangle 23.png";

const LineLogoRotated = ({ position, left10 }) => {
  const containerClass = `line-logo-container ${position}`;

  return (
    <div className={containerClass} >
      <div className="flex flex-col gap-y-0.5 w-fit ml-[5px]" >
        <div className="flex justify-between">
          <img src={barImgHor} className="w-[3px] h-[32px]" alt="bar-line" />
          <img src={barImgHor} className="w-[3px] h-[32px]" alt="bar-line" />
          <img src={barImgHor} className="w-[3px] h-[32px]" alt="bar-line" />
        </div>
        <div className="flex flex-col gap-y-0.5">
          <img src={barImgVer} className="w-[13px] h-[3px]" alt="bar-line" />
          <img src={barImgVer} className="w-[13px] h-[3px]" alt="bar-line" />
          <img src={barImgVer} className="w-[13px] h-[3px]" alt="bar-line" />
        </div>
      </div>
    </div>
  );
};

export default LineLogoRotated;
