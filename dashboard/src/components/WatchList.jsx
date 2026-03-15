import React from "react";

const WatchList = () => {
  return (
    <div className="w-[25%] h-[91vh] flex border-r-2 border-[#EEEEEE]">
      <div className="relative w-full h-fit">
        <input
          type="text"
          className="h-fit w-full outline-none  p-2 border-b-2 border-[#EEEEEE]"
          placeholder="Search eg: infy, bse, nifty, gold mcx"
        />
        <p className="absolute right-2 top-3 text-gray-400 text-sm">9/50</p>
      </div>
    </div>
  );
};

export default WatchList;
