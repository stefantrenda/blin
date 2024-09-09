import React from "react";

const NavigateLinks = ({ links }) => {
  return (
    <div className="text-white">
      <div className="m-auto sm:ml-auto sm:mr-0  w-fit flex flex-col justify-between">
        {links.map((item) => (
          <a href="/" alt='navlinks' className="text-white uppercase text-xs md:text-base xl:text-xl 2xl:text-4xl menu-navs-links link-block transition-colors duration-300" key={item}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavigateLinks;
