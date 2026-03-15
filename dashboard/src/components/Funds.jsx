import React from "react";

const Funds = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-end pr-6 gap-6 mt-4 items-center">
        <p className="text-[#808080]">Instant zero-cost transfer with upi</p>
        <button className="bg-purple-600 text-white px-3 rounded-md py-2 w-fit cursor-pointer">
          Add Fund
        </button>
        <button className="bg-purple-600 text-white px-3 rounded-md py-2 w-fit cursor-pointer">
          Withdraw
        </button>
      </div>
      <div className="w-full p-6 flex flex-col gap-4 mt-10">
        <h1 className="text-[#808080]">Equity</h1>
        <div className="w-[30%] flex flex-col gap-1 p-6 border-2 border-[#EEEEEE] text-[#808080]">
          <div className="flex justify-between w-[90%]">
            <p>Available margin</p>
            <p>4,043.10</p>
          </div>
          <div className="flex justify-between w-[90%]">
            <p>Used margin</p>
            <p>3,757.30</p>
          </div>
          <div className="flex justify-between w-[90%] border-b-2 border-[#EEEEEE] pb-2">
            <p>Available cash</p>
            <p>4,043.10</p>
          </div>
          <div className="flex justify-between w-[90%]">
            <p>Opening Balance</p>
            <p>4,043.10</p>
          </div>
          <div className="flex justify-between w-[90%]">
            <p>Opening Balance</p>
            <p>3736.40</p>
          </div>
          <div className="flex justify-between w-[90%]">
            <p>Payin</p>
            <p>4064.00</p>
          </div>
          <div className="flex justify-between w-[90%]">
            <p>SPAN</p>
            <p>0.00</p>
          </div>
          <div className="flex justify-between w-[90%]">
            <p>Delivery margin</p>
            <p>0.00</p>
          </div>
          <div className="flex justify-between w-[90%]">
            <p>Exposure</p>
            <p>0.00</p>
          </div>
          <div className="flex justify-between w-[90%] border-b-2 border-[#EEEEEE] pb-2">
            <p>Options premium</p>
            <p>0.00</p>
          </div>
          <div className="flex justify-between w-[90%]">
            <p>Collateral (Liquid funds)</p>
            <p>0.00</p>
          </div>
          <div className="flex justify-between w-[90%]">
            <p>Collateral (Equity)</p>
            <p>0.00</p>
          </div>
          <div className="flex justify-between w-[90%]">
            <p>Total Collateral</p>
            <p>0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
