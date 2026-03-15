import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BarChartIcon from "@mui/icons-material/BarChart";
import { watchlist } from "../data/data";
const WatchList = () => {
  return (
    <div className="w-[25%] h-[91vh] flex flex-col border-r-2 border-[#EEEEEE]">
      <div className="relative w-full h-fit">
        <input
          type="text"
          className="h-fit w-full outline-none  p-2 border-b-2 border-[#EEEEEE]"
          placeholder="Search eg: infy, bse, nifty, gold mcx"
        />
        <p className="absolute right-2 top-3 text-gray-400 text-sm">
          {watchlist.length}/50
        </p>
      </div>
      <ul className="flex flex-col">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setshowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setshowWatchListActions(true);
  };

  const handleMouseExit = (e) => {
    setshowWatchListActions(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      className="w-full relative hover:bg-gray-100 cursor-pointer transition-all duration-100 ease-in-out"
    >
      <div className="flex w-full  justify-between px-2 py-3">
        <p className={`${stock.isDown ? "text-red-500" : "text-green-500"}`}>
          {stock.name}
        </p>
        <div className="flex items-center justify-between w-[40%]">
          <span className="">
            {stock.percent}
            {stock.isDown ? (
              <KeyboardArrowDownIcon sx={{ color: "#f44336" }} />
            ) : (
              <KeyboardArrowUpIcon sx={{ color: "#4caf50" }} />
            )}
          </span>

          <span>{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListAction uid={stock.name} />}
    </li>
  );
};

const WatchListAction = ({ uid }) => {
  return (
    <span className="absolute  top-2.5 right-0 bg-gray-100">
      <span className="w-full h-full">
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="bg-[#24c657] text-white w-10 h-7.5 rounded-md text-center mr-2 cursor-pointer text-[0.8rem] border-[0.7px] border-[#24c657]">
            Buy
          </button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="bg-[#ff5722] text-white text-[0.8rem] border-[0.7px] border-[#ff5722] w-10 h-7.5 rounded-md text-center mr-2 cursor-pointer">
            Sell
          </button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="bg-[#4184f3] text-white text-[0.8rem] border-[0.7px]  w-10 h-7.5 rounded-md text-center mr-2 cursor-pointer">
            <BarChartIcon />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="bg-purple-700 text-white text-[0.8rem] border-[0.7px]  w-10 h-7.5 rounded-md text-center mr-2 cursor-pointer">
            <MoreHorizIcon />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
