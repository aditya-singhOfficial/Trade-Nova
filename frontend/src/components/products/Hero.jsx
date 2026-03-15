import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="w-full flex justify-center mt-24">
      <div className="w-[75%] flex flex-col items-center gap-6">
        <h1 className="text-3xl">Zerodha Products</h1>
        <h2 className="text-2xl">
          Sleek, modern, and intuitive trading platforms
        </h2>
        <div className="text-md flex items-center justify-center cursor-pointer">
          <p className="text-md">
            Check out our{" "}
            <span className="text-[#387ED1]">investment offerings</span>
          </p>
          <IoIosArrowRoundForward size={24} color="#387ED1"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
