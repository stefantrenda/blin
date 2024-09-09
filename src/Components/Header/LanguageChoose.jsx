import React, { useState } from "react";
import barImgVer from "../../assets/img/Rectangle 24.png";
import barImgHor from "../../assets/img/Rectangle 23.png";

const LanguageChoose = () => {
  const [active, setActive] = useState("EN");

  const toggleActive = (lang) => {
    setActive(lang);
  };

  return (
    <div className="flex items-center justify-center gap-1 w-2/12 sm:w-1/12">
      <div
        onClick={() => toggleActive("DE")}
        className={active === "DE" ? "active" : ""}
      >
        <p
          className={`text-sm whitespace-nowrap uppercase select-none cursor-pointer transition-colors duration-300 ${
            active === "DE"
              ? "font-extrabold text-white"
              : "text-gray-500 font-normal hover:text-white"
          }`}
        >
          DE
        </p>
      </div>

      <div className="flex flex-col gap-y-0.5">
        <div className="flex flex-col gap-y-0.5">
          <img src={barImgVer} alt="bar-line" />
          <img src={barImgVer} alt="bar-line" />
        </div>
        <div className="flex justify-between">
          <img src={barImgHor} alt="bar-line" />
          <img src={barImgHor} alt="bar-line" />
        </div>
      </div>
      <div
        onClick={() => toggleActive("EN")}
        className={active === "EN" ? "active" : ""}
      >
        <p
          className={`text-sm whitespace-nowrap uppercase select-none cursor-pointer transition-colors duration-300 ${
            active === "EN"
              ? "font-extrabold text-white"
              : "text-gray-500 font-normal hover:text-white"
          }`}
        >
          EN
        </p>
      </div>
    </div>
  );
};

export default LanguageChoose;
