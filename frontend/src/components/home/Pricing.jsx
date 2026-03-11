import React from "react";
import ZeroPrice from "../../assets/images/pricing0.svg";
import IntradayTrades from "../../assets/images/intradayTrades.svg";
import { FaArrowRight } from "react-icons/fa6";
const Pricing = () => {
  return (
    <div className="w-full flex justify-center mt-32">
      <div className="w-[75%] flex justify-between">
        <div className="w-[40%] flex flex-col gap-4">
          <h1 className="text-2xl">Unbeatable pricing</h1>
          <h2 className="text-md">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </h2>
          <button className="text-blue-400 hover:text-black transition-all ease-in-out duration-200 font-medium flex gap-2 items-center cursor-pointer">
            See pricing <FaArrowRight />
          </button>
        </div>
        <div className="w-[55%] flex gap-1 items-center">
          <div className="flex items-center  w-[30%]">
            <img src={ZeroPrice} alt="" className="w-[65%]" />
            <div className="flex items-end">
              <p className="text-[10px] text-gray-700"> Free account opening</p>
            </div>
          </div>
          <div className="flex items-center  w-[40%]">
            <img src={ZeroPrice} alt="" className="w-[50%]" />
            <div className="flex items-end h-full">
              <p className="text-[10px] text-gray-700">
                {" "}
                Free equity delivery and direct mutual funds
              </p>
            </div>
          </div>
          <div className="flex items-center  w-[30%]">
            <img src={IntradayTrades} alt="" className="w-[65%]" />
            <div className="flex items-end">
              <p className="text-[10px] text-gray-700"> Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
