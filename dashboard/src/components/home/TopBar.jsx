import React from "react";
import Menu from "../Menu";
const TopBar = () => {
  return (
    <div className="w-[25%] flex justify-between p-4">
      <div className="flex gap-3">
        <p>NIFTY 50</p>
        <p className="text-red-500">100.2</p>
      </div>
      <div className="flex gap-3">
        <p>SENSEX</p>
        <p className="text-red-500">100.2</p>
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;
