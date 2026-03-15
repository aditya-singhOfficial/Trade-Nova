import React from "react";
import { holdings } from "../data/data";
const Holdings = () => {
  return (
    <div className="w-full">
      <h1 className="border-b-2 p-6 text-3xl w-full border-[#EEEEEE]">
        Holdings({holdings.length})
      </h1>
      <div className="w-full max-h-[50vh] overflow-y-auto">
        <table className="w-full border-b-2 border-[#EEEEEE] ">
          <thead className="border-b border-gray-200">
            <tr className="text-gray-500 text-left">
              <th className="p-6">Investment</th>
              <th className="p-6">Qty.</th>
              <th className="p-6">Avg. Cost</th>
              <th className="p-6">LTP</th>
              <th className="p-6">Cur. val</th>
              <th className="p-6">P&L</th>
              <th className="p-6">Net Chng.</th>
              <th className="p-6">Day Chng.</th>
            </tr>
          </thead>
          {holdings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "text-green-500" : "text-red-500";
            const dayClass = stock.isLoss ? "text-red-500" : "text-green-500";

             return (
              <tr key={index}>
                <td className="p-6">{stock.name}</td>
                <td className="p-6">{stock.qty}</td>
                <td className="p-6">{stock.avg.toFixed(2)}</td>
                <td className="p-6">{stock.price.toFixed(2)}</td>
                <td className="p-6">{curValue.toFixed(2)}</td>
                <td className={`p-6 ${profClass}`}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={`p-6 ${profClass}`}>{stock.net}</td>
                <td className={`p-6 {dayClass}`}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="flex justify-between w-[75%] mt-16">
          <div className="flex flex-col">
            <h1 className="px-6 py-3 text-xl">
              29,875.
              <br />
              <span className="text-gray-500 text-[16px]">55</span>
            </h1>
            <p className="px-6 py-3 text-[12px] text-gray-500">
              Total Investment
            </p>
          </div>

          <div className="flex flex-col">
            <h1 className="px-6 py-3 text-xl">
              31,428.
              <br />
              <span className="text-gray-500 text-[16px]">95</span>
            </h1>
            <p className="px-6 py-3 text-[12px] text-gray-500">Current Value</p>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="px-6 py-3 text-xl text-green-500">
              1553.40(+5.20%)
            </h1>
            <p className="px-6 py-3 text-[12px] text-gray-500">P&L</p>
          </div>
        </div>
    </div>
  );
};

export default Holdings;
