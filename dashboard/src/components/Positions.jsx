import React from "react";
import { positions } from "../data/data";
const Positions = () => {
  return (
    <div className="w-full">
      <h1 className="border-b-2 p-6 text-3xl w-full border-[#EEEEEE]">
        Positions({positions.length})
      </h1>
      <div className="w-full max-h-[65vh] overflow-y-auto">
        <table className="w-full border-b-2 border-[#EEEEEE]">
          <thead className="border-b border-gray-200">
            <tr className="text-gray-500 text-left">
              <th className="p-6 w-1/3">Product</th>
              <th className="p-6">Instrument</th>
              <th className="p-6">Qty.</th>
              <th className="p-6">Avg.</th>
              <th className="p-6">LTP</th>
              <th className="p-6">P&L</th>
              <th className="p-6">Chng.</th>
            </tr>
          </thead>
          {positions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "text-green-500" : "text-red-500";
            const dayClass = stock.isLoss ? "text-red-500" : "text-green-500";

            return (
              <tr key={index}>
                <td className="p-6">{stock.product}</td>
                <td className="p-6">{stock.name}</td>
                <td className="p-6">{stock.qty}</td>
                <td className="p-6">{stock.avg.toFixed(2)}</td>
                <td className="p-6">{stock.price.toFixed(2)}</td>
                <td className={`p-6 ${profClass}`}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={`p-6 ${dayClass}`}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Positions;
