import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const HeaderNav = ({ handleHeaderClick, isExpanded }) => {

  const [hoveredItem, setHoveredItem] = useState(null);

  const renderSection = (id, text) => {
    const hrClassName = hoveredItem === id ? 'hr-visible' : 'hr-invisible';

    return (
      <div className="flex items-center justify-center gap-x-5">
        <div
          className={` w-[5%] flex items-center ${hrClassName} ${
            hoveredItem === id ? 'visible ' : 'invisible'
          }`}
          onMouseEnter={() => setHoveredItem(id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <hr className="w-full  py-0.5  sm:py-0.5  md:py-0.5 lg:py-1 xl:py-1.5 2xl:py-2.5  bg-white" />
        </div>
        <p
          className="roboto-bold text-[30px] sm:text-[40px] md:text-[50px] xl:text-[60px] 2xl:text-[100px]"
          onMouseEnter={() => setHoveredItem(id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {text}
        </p>
        <div
          className={` w-[5%] flex items-center ${hrClassName} ${
            hoveredItem === id ? 'visible' : 'invisible'
          }`}
          onMouseEnter={() => setHoveredItem(id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <hr className="w-full  py-0.5  sm:py-0.5  md:py-0.5 lg:py-1 xl:py-1.5 2xl:py-2.5  bg-white" />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col  items-center text-white w-[89%]  pt-[89px] pb-5 select-none 	">
      <div style={{ alignSelf: "end" }}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=""
          // style={{ top: "17%", right: "6%" }}
          onClick={handleHeaderClick}
        >
          <path
            d="M22.093 0L12.5 9.59305L2.90698 0L0 2.90699L9.59303 12.5L0 22.093L2.90698 25L12.5 15.407L22.093 25L25 22.093L15.407 12.5L25 2.90699L22.093 0Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="my-auto flex flex-col gap-y-10 w-full overflow-y-auto scrollbar-style">
        
           <div>
          {renderSection('C6.1', 'C6.1')}
          {renderSection('C6.2', 'C6.2')}
          {renderSection('C6.3', 'C6.3')}
        </div>
        <nav
          className={` flex flex-col justify-center items-center roboto-medium  gap-y-2		`}
        >
          <Link
            className="uppercase menu-navs transition-all duration-300 ease-in-out text-[17px] sm:text-[20px] md:text-[20px] xl:text-[30px] 2xl:text-[40px]"
            to="/"
          >
            Home
          </Link>
          <Link
            className="uppercase menu-navs transition-all duration-300 ease-in-out text-[17px] sm:text-[20px] md:text-[20px] xl:text-[30px] 2xl:text-[40px]"
            to="/about"
          >
            About
          </Link>
          <Link
            className="uppercase menu-navs transition-all duration-300 ease-in-out text-[17px] sm:text-[20px] md:text-[20px] xl:text-[30px] 2xl:text-[40px]"
            to="/warranty"
          >
            Warranty
          </Link>
          <Link
            className="uppercase menu-navs transition-all duration-300 ease-in-out text-[17px] sm:text-[20px] md:text-[20px] xl:text-[30px] 2xl:text-[40px]"
            to="/service"
          >
            Service
          </Link>
        </nav>
        <div className="flex flex-col justify-center items-center  gap-y-1">
          <p className="roboto-regular text-[14px] sm:text-[16px] md:text-[16px] xl:text-[20px] 2xl:text-[30px]">blinwatch@gmail.com</p>
          <p className="roboto-regular text-[14px] sm:text-[16px] md:text-[16px] xl:text-[20px] 2xl:text-[30px]">+0 000 000 00 00</p>
        </div>
        <div className="flex flex-col justify-center items-center  gap-y-1">
          <p className="roboto-regular text-[14px] sm:text-[16px] md:text-[16px] xl:text-[20px] 2xl:text-[30px]">Follow us:</p>
          <div className="flex  justify-center items-center gap-x-7">
            <svg
              className="cursor-pointer"
              width="10"
              height="20"
              viewBox="0 0 10 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.55277 20V10.6154H0V7.23652H2.55277V4.3505C2.55277 2.08264 4.0607 0 7.53529 0C8.9421 0 9.98237 0.1311 9.98237 0.1311L9.9004 3.28642C9.9004 3.28642 8.83949 3.27638 7.68178 3.27638C6.42879 3.27638 6.22804 3.83768 6.22804 4.7693V7.23652H10L9.83588 10.6154H6.22804V20H2.55277Z"
                fill="white"
              />
            </svg>
            <svg
              className="cursor-pointer"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99998 1.80184C12.6701 1.80184 12.9864 1.812 14.0408 1.86011C15.0158 1.90461 15.5453 2.06752 15.8977 2.20443C16.3644 2.38583 16.6976 2.60257 17.0475 2.95248C17.3974 3.30239 17.6142 3.63555 17.7955 4.10229C17.9325 4.4547 18.0954 4.98419 18.1399 5.95914C18.188 7.01364 18.1982 7.32989 18.1982 10C18.1982 12.6701 18.188 12.9864 18.1399 14.0409C18.0954 15.0158 17.9325 15.5453 17.7955 15.8978C17.6142 16.3645 17.3974 16.6976 17.0475 17.0476C16.6976 17.3975 16.3644 17.6142 15.8977 17.7956C15.5453 17.9325 15.0158 18.0954 14.0408 18.1399C12.9865 18.188 12.6703 18.1982 9.99998 18.1982C7.32969 18.1982 7.01344 18.188 5.95914 18.1399C4.98415 18.0954 4.45466 17.9325 4.10229 17.7956C3.63551 17.6142 3.30235 17.3975 2.95244 17.0476C2.60253 16.6976 2.38579 16.3645 2.20443 15.8978C2.06748 15.5453 1.90457 15.0158 1.86007 14.0409C1.81196 12.9864 1.8018 12.6701 1.8018 10C1.8018 7.32989 1.81196 7.01364 1.86007 5.95918C1.90457 4.98419 2.06748 4.4547 2.20443 4.10229C2.38579 3.63555 2.60253 3.30239 2.95244 2.95248C3.30235 2.60257 3.63551 2.38583 4.10229 2.20443C4.45466 2.06752 4.98415 1.90461 5.9591 1.86011C7.0136 1.812 7.32985 1.80184 9.99998 1.80184ZM9.99998 0C7.28412 0 6.94362 0.0115116 5.87701 0.0601777C4.81259 0.108764 4.08569 0.277786 3.44958 0.525007C2.79199 0.780564 2.23432 1.1225 1.67839 1.67843C1.12246 2.23436 0.780524 2.79203 0.524967 3.44962C0.277746 4.08573 0.108725 4.81263 0.060138 5.87705C0.0114719 6.94362 0 7.28416 0 10C0 12.7159 0.0114719 13.0564 0.060138 14.123C0.108725 15.1874 0.277746 15.9143 0.524967 16.5504C0.780524 17.208 1.12246 17.7657 1.67839 18.3216C2.23432 18.8775 2.79199 19.2195 3.44958 19.475C4.08569 19.7223 4.81259 19.8913 5.87701 19.9399C6.94362 19.9885 7.28412 20 9.99998 20C12.7158 20 13.0564 19.9885 14.1229 19.9399C15.1874 19.8913 15.9143 19.7223 16.5504 19.475C17.208 19.2195 17.7656 18.8775 18.3216 18.3216C18.8775 17.7657 19.2194 17.208 19.475 16.5504C19.7222 15.9143 19.8912 15.1874 19.9398 14.123C19.9885 13.0564 20 12.7159 20 10C20 7.28416 19.9885 6.94362 19.9398 5.87705C19.8912 4.81263 19.7222 4.08573 19.475 3.44962C19.2194 2.79203 18.8775 2.23436 18.3216 1.67843C17.7656 1.1225 17.208 0.780564 16.5504 0.525007C15.9143 0.277786 15.1874 0.108764 14.1229 0.0601777C13.0564 0.0115116 12.7158 0 9.99998 0ZM9.99998 4.86487C7.16393 4.86487 4.86483 7.16397 4.86483 10C4.86483 12.8361 7.16393 15.1352 9.99998 15.1352C12.836 15.1352 15.1351 12.8361 15.1351 10C15.1351 7.16397 12.836 4.86487 9.99998 4.86487ZM9.99998 13.3334C8.15904 13.3334 6.66663 11.841 6.66663 10C6.66663 8.15908 8.15904 6.66667 9.99998 6.66667C11.8409 6.66667 13.3333 8.15908 13.3333 10C13.3333 11.841 11.8409 13.3334 9.99998 13.3334ZM16.538 4.66199C16.538 5.32474 16.0008 5.86201 15.338 5.86201C14.6753 5.86201 14.138 5.32474 14.138 4.66199C14.138 3.99924 14.6753 3.462 15.338 3.462C16.0008 3.462 16.538 3.99924 16.538 4.66199Z"
                fill="white"
              />
            </svg>
            <svg
              className="cursor-pointer"
              width="28"
              height="20"
              viewBox="0 0 28 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.4149 3.12932C27.0929 1.89755 26.1441 0.927448 24.9394 0.598229C22.7558 0 14 0 14 0C14 0 5.2442 0 3.06058 0.598229C1.8559 0.9275 0.907111 1.89755 0.585087 3.12932C0 5.36198 0 10.0202 0 10.0202C0 10.0202 0 14.6784 0.585087 16.9111C0.907111 18.1429 1.8559 19.0726 3.06058 19.4018C5.2442 20 14 20 14 20C14 20 22.7558 20 24.9394 19.4018C26.1441 19.0726 27.0929 18.1429 27.4149 16.9111C28 14.6784 28 10.0202 28 10.0202C28 10.0202 28 5.36198 27.4149 3.12932ZM11.1363 14.2495V5.79088L18.4545 10.0203L11.1363 14.2495Z"
                fill="white"
              />
            </svg>
            <svg
              className="cursor-pointer"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.91925 0C1.76397 0 0 1.76393 0 3.91925V16.0814C0 18.2367 1.76393 20 3.91925 20H16.0814C18.2367 20 20 18.2367 20 16.0814V3.91925C20 1.76397 18.2367 0 16.0814 0H3.91925ZM4.905 3.3004C5.93842 3.3004 6.57495 3.97882 6.5946 4.87059C6.5946 5.74267 5.93838 6.44015 4.88502 6.44015H4.86563C3.85188 6.44015 3.19666 5.74271 3.19666 4.87059C3.19666 3.97884 3.87171 3.3004 4.90498 3.3004H4.905ZM13.8105 7.46842C15.7979 7.46842 17.2878 8.76743 17.2878 11.5589V16.7702H14.2674V11.9083C14.2674 10.6866 13.8303 9.85307 12.7372 9.85307C11.9028 9.85307 11.4054 10.4149 11.187 10.9576C11.1073 11.1518 11.0877 11.4229 11.0877 11.6946V16.7702H8.06729C8.06729 16.7702 8.10692 8.53433 8.06729 7.68156H11.0883V8.9686C11.4897 8.34933 12.2076 7.4684 13.8105 7.4684V7.46842ZM3.37481 7.68222H6.3952V16.7702H3.37481V7.68222Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        
      </div>
    </div>
     
  );
};

export default HeaderNav;
