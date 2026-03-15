import React from "react";
import pricing0 from "../../assets/images/pricing0.svg";
import intradayTrades from "../../assets/images/intradayTrades.svg";
const Brokerage = () => {
  return (
    <div className="w-full flex justify-center mt-32">
      <div className="w-[75%] grid justify-items-center grid-cols-3 gap-6">
        <div className="flex flex-col gap-5 items-center">
          <img src={pricing0} alt="zeroPrice" className="w-[75%]"/>
          <h1 className="text-3xl">Free equity delivery</h1>
          <h2 className="text-[#424242] text-center">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </h2>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={intradayTrades} alt="intradayPrice" className="w-[75%]"/>
          <h1 className="text-3xl">Intraday and F&O trades</h1>
          <h2 className="text-[#424242] text-center">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </h2>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={pricing0} alt="zeroPrice" className="w-[75%]"/>
          <h1 className="text-3xl">Free direct MF</h1>
          <h2 className="text-[#424242] text-center">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
