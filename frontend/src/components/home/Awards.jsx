import React from "react";
import largestBroker from "../../assets/images/largestBroker.svg";

import pressLogos from "../../assets/images/pressLogos.png";
const Awards = () => {
  return (
    <div className="w-full flex justify-center mt-32">
      <div className="w-[75%] flex justify-between">
        <div className="w-[40%]">
          <img
            src={largestBroker}
            alt="largestBroker"
            className="w-full h-full"
          />
        </div>
        <div className="w-[45%] flex flex-col justify-between">
          <h1 className="text-4xl">Largest stock broker in India</h1>
          <p className="text-lg">
            2+ million Zerodha cliets contribue to over 15% of all retail oder
            volumes in India daily by trading and investing in:
          </p>
          <div className="flex gap-20 px-6 ">
            <ul className="list-disc">
              <li className="text-lg">Futures and Options</li>
              <li className="text-lg">Commodity derivates</li>
              <li className="text-lg">Currency derivates</li>
            </ul>
            <ul className=" list-disc">
              <li className="text-lg">Stock & IPOs</li>
              <li className="text-lg">Direct mutual funds</li>
              <li className="text-lg">Bonds and Government</li>
            </ul>
          </div>
          <img src={pressLogos} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
