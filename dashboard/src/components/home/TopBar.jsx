import React from "react";
import Menu from "../Menu";
const TopBar = () => {
  return (
    <div className="w-full flex border-b-2 border-[#EEEEEE]">
      <div className="w-[25%]  flex justify-between p-4 items-center border-r-2 border-[#EEEEEE]">
        <div className="flex gap-3">
          <p>NIFTY 50</p>
          <p className="text-red-500">100.2</p>
        </div>
        <div className="flex gap-3">
          <p>SENSEX</p>
          <p className="text-red-500">100.2</p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;
