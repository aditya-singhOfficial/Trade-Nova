import React from "react";
import { Routes, Route } from "react-router-dom";
import WatchList from "../WatchList";
import Summary from "../Summary";
import Orders from "../Orders";
import Holdings from "../Holdings";
import Positions from "../Positions";
import Funds from "../Funds";
import Apps from "../Apps";
const Dashboard = () => {
  return (
    <div className="flex w-full">
      <WatchList />
      <div className="w-[75%]">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/holdings" element={<Holdings />} />
          <Route exact path="/positions" element={<Positions />} />
          <Route exact path="/funds" element={<Funds />} />
          <Route exact path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
