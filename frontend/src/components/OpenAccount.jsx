import React from "react";

const OpenAccount = () => {
  return (
    <div className="w-full flex justify-center mt-32">
      <div className="w-[60%] flex flex-col gap-4 items-center">
        <h1 className="text-2xl">Open a Zerodha account</h1>
        <h2 className="text-md text-[#808080]">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </h2>
        <button className="py-3 mt-4 px-8 text-xl bg-[#387ED1] rounded-md w-fit text-white">
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default OpenAccount;
