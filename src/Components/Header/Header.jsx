import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LanguageChoose from "./LanguageChoose";
import BN from "../../assets/reusable/BN";
import Cart from "./Cart";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleHeaderClick = () => {
    setIsExpanded(!isExpanded);
  };

  const headerClasses = `fixed inset-x-0 top-0 z-20 w-full flex justify-center custom-header  ${
    !isExpanded ? "bg-black" : "bg-black/80 animateSmoothBounceDown"
  } transition-all duration-300 ease-in-out ${
    isExpanded ? "h-[95vh] w-full" : "h-[89px]  "
  }`;

  const MenuIcon = () => (
    <>
      <div
        className="h-[15px] w-[20px]  absolute cursor-pointer z-50"
        style={{bottom: "-10px"}}
        onClick={handleHeaderClick}
      >
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="white"
          xmlns="http:www.w3.org/2000/svg"
          className="z-50 cursor-pointer"
        >
          <rect width="20" height="2" fill="white" />
          <rect y="7" width="20" height="2" fill="white" />
          <rect y="13" width="20" height="2" fill="white" />
        </svg>
      </div>
    </>
  );

  return (
    <>
    <div className="h-[89px] bg-black flex justify-center items-center">
      <div className="w-full fixed flex justify-between items-center  inset-x-0 top-0 px-5 z-30 h-[89px]">
        <LanguageChoose />
        <BN isExpanded={isExpanded} />
        <Cart />
      </div>
      <div
        className={headerClasses}
        style={{ borderBottom: "1px solid var(--color-gray)" }}
      >
        {isExpanded && (
          <HeaderNav
            handleHeaderClick={handleHeaderClick}
            isExpanded={isExpanded}
          />
        )}
          <MenuIcon />

      </div>

      {/* {!isExpanded && (
        <div className="bg-black mt-auto z-50 h-[27px] w-[50px]">
          {!isExpanded && <MenuIcon />}{" "}
        </div>
      )} */}
      {/* {!isExpanded && ( */}
        {/* <div className="bg-black mt-auto z-50 h-[27px] w-[50px]"> */}
          {/* {!isExpanded &&  */}
          {/* }{" "} */}
        {/* </div> */}
      {/* )} */}
    </div>
    </>

  );
};

export default Header;
