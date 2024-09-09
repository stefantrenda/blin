import React from "react";
import BNFooter from "./BN/BNFooter";
import NavigateLinks from "./NavigateLinks/NavigateLinks";

const fist = ["about", "Our values", "FAQ"];
const second = ["warranty", "Service", "Contact"];
const third = ["Impress", "privacy", "Legal"];

const Footer = () => {
  return (
    <div className="bg-black flex flex-col  md:flex-row flex-wrap text-white py-5  md:py-20 px-2 md:px-5">
      <div className="w-full  md:w-1/2 flex flex-col md:flex-row items-center mb-5 xl:mb-0">
        <div className="w-1/3 md:w-1/4 flex md:block justify-center md:justify-normal mb-5 md:mb-0">
          <BNFooter />
        </div>
        <div className="w-full md:w-3/4 flex justify-between  mb-5 md:mb-0">
          <div className="w-1/3  h-auto">
            <NavigateLinks links={fist} />
          </div>
          <div className="w-1/3  h-auto">
            <NavigateLinks links={second} />
          </div>
          <div className="w-1/3  h-auto">
            <NavigateLinks links={third} />
          </div>
        </div>
      </div>
      <div className="w-full  md:w-1/2 flex items-center justify-center md:justify-end">
        <div className="w-full text-center md:text-end	 text-white uppercase roboto-black text-xl md:text-3xl xl:text-5xl 2xl:text-7xl">
          <p>Atelier für ultraleichte</p>
          <p>Carbon-Zeitmesser.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
