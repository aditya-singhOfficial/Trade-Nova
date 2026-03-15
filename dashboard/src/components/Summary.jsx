import React from "react";

const Summary = () => {
  return (
    <div className="w-full">
      <h1 className="border-b-2 p-6 text-3xl w-full border-[#EEEEEE]">
        Hi, USER!
      </h1>
      <div className="flex flex-col gap-16 p-6 border-b-2 border-[#EEEEEE]">
        <h1 className="text-2xl">Equity</h1>
        <div className="flex gap-28">
          <div className="border-r-2 pr-16 flex flex-col gap-6 border-[#EEEEEE]">
            <p className="text-2xl">3.74k</p>
            <p className="text-sm capitalize text-[#808080]">
              margin available
            </p>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm capitalize text-[#808080]">
              margin used: <span className="text-black">0</span>
            </p>
            <p className="text-sm capitalize text-[#808080]">
              opening balance: <span className="text-black">3.74k</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-16 p-6 border-b-2 border-[#EEEEEE]">
        <h1 className="text-2xl">Holding(13)</h1>
        <div className="flex gap-28">
          <div className="border-r-2 pr-16 flex flex-col gap-6 border-[#EEEEEE]">
            <p className="text-2xl text-green-500">
              1.55k{" "}<span className="text-[10px]">+5.20%</span>
            </p>
            <p className="text-sm capitalize text-[#808080]">p&l</p>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm capitalize text-[#808080]">
              current value: <span className="text-black">31.43k</span>
            </p>
            <p className="text-sm capitalize text-[#808080]">
              investment: <span className="text-black">29.88k</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
