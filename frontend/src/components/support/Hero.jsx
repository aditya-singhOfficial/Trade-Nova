import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="w-full flex justify-center bg-[#397DD0] text-white p-12">
      <div className="w-[75%] flex flex-col">
        <div className="flex justify-between w-full font-medium">
          <h1>Support Panel</h1>
          <Link className="text-[14px] underline">Track Ticket</Link>
        </div>
        <div className="flex justify-between mt-12">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl w-[75%]">
              Search for an answer or browse help topics to create ticket
            </h1>
            <input
              type="text"
              className="py-3 px-4 w-full bg-white text-black outline-none border-none rounded-md"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected."
            />
            <div className="w-[85%] flex gap-3 flex-wrap">
              <Link className="text-[13px] underline">Track account opening</Link>
              <Link className="text-[13px] underline">Track segment activation</Link>
              <Link className="text-[13px] underline">Intraday margins</Link>
              <Link className="text-[13px] underline">Kite user manual</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl">Featured</h1>
            <ol className="px-8 list-decimal flex flex-col gap-2">
              <li className="text-[13px] underline">Current Takeover and Delisting - {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}</li>
              <li className="text-[13px] underline">Latest Intraday levrages - MIS & CO</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
