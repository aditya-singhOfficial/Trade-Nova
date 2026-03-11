import React from "react";
import NithinKamath from "../../assets/images/nithinKamath.jpg";
const Team = () => {
  return (
    <div className="w-full flex justify-center mt-32">
      <div className="w-[65%] flex justify-between">
        <div className="w-[35%] flex flex-col items-center gap-4">
          <img
            src={NithinKamath}
            alt="NithinKamath"
            className="rounded-full w-[80%]"
          />
          <h1 className="text-xl">Nithin Kamath</h1>
          <h2 className="text-[#808080]">Founder, CEO</h2>
        </div>
        <div className="w-[60%] flex flex-col gap-6">
          <p className="text-lg leading-8 text-[#808080]">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="text-lg leading-8 text-[#808080]">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="text-lg leading-8 text-[#808080]">
            Playing basketball is his zen.
          </p>

          <p className="text-lg leading-8 text-[#808080]">
            Connect on{" "}
            <span className="text-[#387ED1] hover:text-black cursor-pointer transition-all ease-in-out duration-200">
              Homepage
            </span>{" "}
            /{" "}
            <span className="text-[#387ED1] hover:text-black cursor-pointer transition-all ease-in-out duration-200">
              TradingQnA{" "}
            </span>
            /{" "}
            <span className="text-[#387ED1] hover:text-black cursor-pointer transition-all ease-in-out duration-200">
              Twitter
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
