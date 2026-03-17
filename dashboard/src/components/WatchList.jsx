import React, { useState, memo, useCallback } from "react";
import { Tooltip, Grow } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BarChartIcon from "@mui/icons-material/BarChart";
import { watchlist } from "../data/data";
import BuyWindow from "../components/BuyWindow";
import { DoughnutChart } from "../components/DoughnutChart";

const WatchList = () => {
  const [activeBuyStock, setActiveBuyStock] = useState(null);

  const labels = watchlist.map((item) => item["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(246, 70, 26, 0.7)",
          "rgba(255, 107, 107, 0.7)",
          "rgba(78, 205, 196, 0.7)",
          "rgba(26, 83, 92, 0.7)",
          "rgba(255, 230, 109, 0.7)",
          "rgba(255, 159, 28, 0.7)",
          "rgba(46, 196, 182, 0.7)",
          "rgba(231, 29, 54, 0.7)",
          "rgba(58, 134, 255, 0.7)",
          "rgba(131, 56, 236, 0.7)",
          "rgba(255, 0, 110, 0.7)",
          "rgba(6, 214, 160, 0.7)",
          "rgba(255, 209, 102, 0.7)",
          "rgba(17, 138, 178, 0.7)",
          "rgba(7, 59, 76, 0.7)",
          "rgba(247, 127, 0, 0.7)",
          "rgba(214, 40, 40, 0.7)",
          "rgba(0, 48, 73, 0.7)",
          "rgba(144, 190, 109, 0.7)",
          "rgba(67, 170, 139, 0.7)",
          "rgba(87, 117, 144, 0.7)",
          "rgba(249, 65, 68, 0.7)",
          "rgba(168, 218, 220, 0.7)",
          "rgba(69, 123, 157, 0.7)",
          "rgba(106, 76, 147, 0.7)",
          "rgba(255, 183, 3, 0.7)",
          "rgba(138, 201, 38, 0.7)",
          "rgba(25, 130, 196, 0.7)",
          "rgba(255, 89, 94, 0.7)",
          "rgba(109, 89, 122, 0.7)",
        ],
        borderColor: [
          "rgba(246, 70, 26, 1)",
          "rgba(255, 107, 107, 1)",
          "rgba(78, 205, 196, 1)",
          "rgba(26, 83, 92, 1)",
          "rgba(255, 230, 109, 1)",
          "rgba(255, 159, 28, 1)",
          "rgba(46, 196, 182, 1)",
          "rgba(231, 29, 54, 1)",
          "rgba(58, 134, 255, 1)",
          "rgba(131, 56, 236, 1)",
          "rgba(255, 0, 110, 1)",
          "rgba(6, 214, 160, 1)",
          "rgba(255, 209, 102, 1)",
          "rgba(17, 138, 178, 1)",
          "rgba(7, 59, 76, 1)",
          "rgba(247, 127, 0, 1)",
          "rgba(214, 40, 40, 1)",
          "rgba(0, 48, 73, 1)",
          "rgba(144, 190, 109, 1)",
          "rgba(67, 170, 139, 1)",
          "rgba(87, 117, 144, 1)",
          "rgba(249, 65, 68, 1)",
          "rgba(168, 218, 220, 1)",
          "rgba(69, 123, 157, 1)",
          "rgba(106, 76, 147, 1)",
          "rgba(255, 183, 3, 1)",
          "rgba(138, 201, 38, 1)",
          "rgba(25, 130, 196, 1)",
          "rgba(255, 89, 94, 1)",
          "rgba(109, 89, 122, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleCloseBuyWindow = useCallback(() => {
    setActiveBuyStock(null);
  }, []);

  return (
    <div className="w-[25%] max-h-[91vh] overflow-y-auto overflow-x-hidden h-[91vh] flex flex-col border-r-2 border-[#EEEEEE]">
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
        {watchlist.map((stock) => (
          <WatchListItem
            key={stock.name}
            stock={stock}
            activeBuyStock={activeBuyStock}
            setActiveBuyStock={setActiveBuyStock}
            onClose={handleCloseBuyWindow}
          />
        ))}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;
const WatchListItem = memo(
  ({ stock, activeBuyStock, setActiveBuyStock, onClose }) => {
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
            close={onClose}
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
  },
);

WatchListItem.displayName = "WatchListItem";

const WatchListAction = ({ uid, setActiveBuyStock }) => {
  const handleBuyWindowOpen = () => {
    setActiveBuyStock(uid);
  };

  return (
    <div className="absolute top-2.5 right-0 hidden group-hover:flex bg-gray-100">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button
          onClick={handleBuyWindowOpen}
          className="bg-[#24c657] text-white w-10 h-8 rounded-md mr-2 text-[0.8rem]"
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
        <button className="bg-[#ff5722] text-white w-10 h-8 rounded-md mr-2 text-[0.8rem]">
          Sell
        </button>
      </Tooltip>

      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="bg-[#4184f3] text-white w-10 h-8 rounded-md mr-2 flex items-center justify-center">
          <BarChartIcon fontSize="small" />
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="bg-purple-700 text-white w-10 h-8 rounded-md flex items-center justify-center">
          <MoreHorizIcon fontSize="small" />
        </button>
      </Tooltip>
    </div>
  );
};
