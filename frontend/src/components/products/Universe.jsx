import React from "react";
import zerodhaFundhouse from "../../assets/images/zerodhaFundhouse.png";
import dittoLogo from "../../assets/images/dittoLogo.png";
import sensibullLogo from "../../assets/images/sensibullLogo.svg";
import smallcaseLogo from "../../assets/images/smallcaseLogo.png";
import streakLogo from "../../assets/images/streakLogo.png";
import { Link } from "react-router-dom";
const Universe = () => {
  return (
    <div className="w-full flex justify-center mt-32">
      <div className="w-[75%] flex flex-col gap-4">
        <h1 className="text-2xl text-center">The Zerodha Universe</h1>
        <h2 className="text-xl text-center">
          Extend your trading and investment experience even further with our
          partner platforms
        </h2>
        <div className="grid grid-cols-3 justify-items-center gap-12 mt-12">
          <div className="flex flex-col gap-4 items-center">
            <img src={zerodhaFundhouse} alt="" className="w-[50%]" />
            <p className="text-[12px] w-[55%] text-[#9B9B9B] text-center">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img src={sensibullLogo} alt="" className="w-[50%]" />
            <p className="text-[12px] w-[55%] text-[#9B9B9B] text-center">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img src={zerodhaFundhouse} alt="" className="w-[50%]" />
            <p className="text-[12px] w-[55%] text-[#9B9B9B] text-center">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img src={streakLogo} alt="" className="w-[50%]" />
            <p className="text-[12px] w-[55%] text-[#9B9B9B] text-center">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img src={smallcaseLogo} alt="" className="w-[50%]" />
            <p className="text-[12px] w-[55%] text-[#9B9B9B] text-center">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img src={dittoLogo} alt="" className="w-[50%]" />
            <p className="text-[12px] w-[55%] text-[#9B9B9B] text-center">
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link
            to={"/signup"}
            className="py-3 mt-4 px-8 text-xl bg-[#387ED1] rounded-md w-fit text-white"
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Universe;
