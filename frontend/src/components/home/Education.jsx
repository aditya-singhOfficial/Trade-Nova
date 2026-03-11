import React from "react";
import EducationImage from "../../assets/images/education.svg";
import { FaArrowRight } from "react-icons/fa6";
const Education = () => {
  return (
    <div className="w-full flex justify-center mt-32">
      <div className="w-[75%] flex justify-between">
        <div className="w-[45%]">
          <img src={EducationImage} alt="" className="w-[80%]"/>
        </div>
        <div className="w-[50%] flex flex-col gap-6 justify-center">
          <h1 className="text-2xl">Free and open market education</h1>
          <div className="flex flex-col gap-4">
            <h2 className="text-md">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </h2>
            <button className="w-fit text-blue-400 hover:text-black transition-all ease-in-out duration-200 font-medium flex gap-2 items-center cursor-pointer">
              Varsity
              <FaArrowRight />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-md">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </h2>
            <button className="w-fit text-blue-400 hover:text-black transition-all ease-in-out duration-200 font-medium flex gap-2 items-center cursor-pointer">
              TradingQ&A<FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
