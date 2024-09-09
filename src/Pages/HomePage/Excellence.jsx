import React from "react";
import TextLine from "../../assets/reusable/TextLine";
import ClockImg from "../../assets/img/Image 1.jpg";
import Button from "../../assets/reusable/Button/Button";
import NavButtons from "../../assets/reusable/Button/NavButtons";
import LineLogo from "../../assets/reusable/LineLogo/LineLogo";

const Excellence = () => {
  return (
    <div className="bg-black text-white  p-5">
      <TextLine fistLine={"Excellence "} secondLine={"in everything"} />
      <div className="w-full flex-col-reverse md:flex-row flex mt-5 ">
        <div className="w-full md:w-[30%] flex flex-col gap-y-14 self-center	">
          <div>
            <p className="w-full md:w-[90%] text-justify md:text-start h-full text-base xl:text-2xl 2xl:text-4xl  roboto-regular">
              BLIN, the epitome of luxury wristwatch craftsmanship, stands as a
              beacon of sophistication and elegance in the world of haute
              horology. With a rich heritage dating back over a century, BLIN
              has consistently pushed the boundaries of innovation.
            </p>
          </div>
          <div className="w-full md:w-[16rem]">
            <Button />
          </div>
          <div className="flex justify-center md:justify-start">
            <NavButtons />
          </div>
        </div>
        <div className="w-full md:w-[70%] flex justify-center md:justify-end mb-5 md:mb-0">
          <img src={ClockImg} alt="watch-img" className="w-[90%]" />
        </div>
      </div>
    </div>
  );
};

export default Excellence;
