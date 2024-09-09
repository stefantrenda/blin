import React from "react";
import videoSrc from "../../assets/img/k2_BLIN_CGI.mov";
import TextLine from "../../assets/reusable/TextLine";

const Banner = () => {
  return (
    <div
      className="flex flex-colmin "
      style={{ minHeight: "calc(100vh - 89px)" }}
    >
      <div className="relative flex justify-center items-center flex-grow ">
        <video
          className="absolute flex-col w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        <div className="w-10/12 gap-3 lg:gap-5 2xl:gap-8 flex items-center justify-center absolute  p-4 ">
          <div className=" text-white flex flex-col justify-center items-end">
            <div className="w-fit h-20 sm:h-[6rem]  md:h-[8rem] lg:h-[12rem] xl:h-[15rem] 2xl:h-[18rem]">
              <div className="h-10 sm:h-[3rem]  md:h-[4rem] lg:h-[6rem] xl:h-[7.5rem] 2xl:h-[9rem] flex items-center">
                <h2 className="text-[1.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[10rem]  font-extrabold whitespace-nowrap uppercase ">
                  ZEIT,
                </h2>
              </div>

              <div className="h-10 sm:h-[3rem]  md:h-[4rem] lg:h-[5rem] xl:h-[7.5rem] 2xl:h-[9rem] flex items-center">
                <hr className="w-full  py-0.5  sm:py-0.5  md:py-1 lg:py-1 xl:py-1.5 2xl:py-2.5  bg-white" />
              </div>
            </div>
          </div>
          <div className=" text-white flex flex-col justify-center items-start">
            <div className="w-fit h-20 sm:h-[6rem]  md:h-[8rem] lg:h-[12rem] xl:h-[15rem] 2xl:h-[18rem]">
              <div className="h-10 sm:h-[3rem]  md:h-[4rem] lg:h-[5rem] xl:h-[7.5rem] 2xl:h-[9rem] flex items-center">
                <hr className="w-full  py-0.5  sm:py-0.5  md:py-1 lg:py-1 xl:py-1.5 2xl:py-2.5  bg-white" />
              </div>

              <div className="h-10 sm:h-[3rem]  md:h-[4rem] lg:h-[6rem] xl:h-[7.5rem] 2xl:h-[9rem] flex items-center">
                <h2 className="text-[1.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[10rem]  font-extrabold whitespace-nowrap uppercase">
                  neu definiert
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
