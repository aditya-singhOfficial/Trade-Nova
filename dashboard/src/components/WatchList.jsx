import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BarChartIcon from "@mui/icons-material/BarChart";
import { watchlist } from "../data/data";
import BuyWindow from "../components/BuyWindow";

const WatchList = () => {
  const [activeBuyStock, setActiveBuyStock] = useState(null);

  return (
    <div className="w-[25%] h-[91vh] flex flex-col border-r-2 border-[#EEEEEE]">
      <div className="relative w-full h-fit">
        <input
          type="text"
          className="h-fit w-full outline-none p-2 border-b-2 border-[#EEEEEE]"
          placeholder="Search eg: infy, bse, nifty, gold mcx"
        />
        <p className="absolute right-2 top-3 text-gray-400 text-sm">
          {watchlist.length}/50
        </p>
      </div>

      <ul className="flex flex-col">
        {watchlist.map((stock, index) => (
          <WatchListItem
            key={index}
            stock={stock}
            activeBuyStock={activeBuyStock}
            setActiveBuyStock={setActiveBuyStock}
          />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, activeBuyStock, setActiveBuyStock }) => {
  const isBuyOpen = activeBuyStock === stock.name;

  return (
    <li className="group w-full relative hover:bg-gray-100 cursor-pointer transition-all duration-100 ease-in-out">
      <div className="flex w-full justify-between px-2 py-3">
        <p className={`${stock.isDown ? "text-red-500" : "text-green-500"}`}>
          {stock.name}
        </p>

        <div className="flex items-center justify-between w-[40%]">
          <span>
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

      {/* BUY WINDOW */}
      {isBuyOpen && (
        <BuyWindow
          stockCurrPrice={stock.price}
          uid={stock.name}
          close={() => setActiveBuyStock(null)}
        />
      )}

      {/* ACTION BUTTONS */}
      {!isBuyOpen && (
        <WatchListAction
          uid={stock.name}
          setActiveBuyStock={setActiveBuyStock}
        />
      )}
    </li>
  );
};

const WatchListAction = ({ uid, setActiveBuyStock }) => {
  const handleBuyWindowOpen = () => {
    setActiveBuyStock(uid);
  };

  return (
    <span className="absolute top-2.5 right-0 hidden group-hover:flex bg-gray-100">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button
          onClick={handleBuyWindowOpen}
          className="bg-[#24c657] text-white w-10 h-7.5 rounded-md mr-2 text-[0.8rem]"
        >
          Buy
        </button>
      </Tooltip>

      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="bg-[#ff5722] text-white w-10 h-7.5 rounded-md mr-2 text-[0.8rem]">
          Sell
        </button>
      </Tooltip>

      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="bg-[#4184f3] text-white w-10 h-7.5 rounded-md mr-2 flex items-center justify-center">
          <BarChartIcon fontSize="small" />
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="bg-purple-700 text-white w-10 h-7.5 rounded-md flex items-center justify-center">
          <MoreHorizIcon fontSize="small" />
        </button>
      </Tooltip>
    </span>
  );
};
