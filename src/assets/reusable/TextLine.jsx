import React from "react";

const TextLine = ({ fistLine, secondLine }) => {
  return (
    <div className="p-4 text-center w-full md:w-[65%]">
      <div className="text-white flex w-full justify-center items-center">
        <h2 className=" text-[1.2rem] sm:text-[1.4rem] md:text-[3.5rem] xl:text-[4rem]  2xl:text-[9rem]  font-extrabold whitespace-nowrap uppercase">
          {fistLine}
        </h2>
        <hr className="grow ml-[1.5em]  py-0.5  sm:py-0.5  md:py-1 lg:py-1 xl:py-1.5 2xl:py-2.5  bg-white" />
      </div>
      <div className="text-white flex w-full justify-center items-center">
        <hr className="grow mr-[1.5em]  py-0.5  sm:py-0.5  md:py-1 lg:py-1 xl:py-1.5 2xl:py-2.5  bg-white" />
        <h2 className=" text-[1.2rem] sm:text-[1.4rem] md:text-[3.5rem] xl:text-[4rem] 2xl:text-[9rem]  font-extrabold whitespace-nowrap uppercase">
          {secondLine}
        </h2>
      </div>
    </div>
  );
};

export default TextLine;
