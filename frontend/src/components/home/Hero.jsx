import React from "react";
import homeHero from "../../assets/images/homeHero.png";
const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <div className="w-[65%] ">
        <img src={homeHero} alt="" />
      </div>
      <div className="w-[65%] text-center mt-10 flex flex-col items-center gap-4">
        <p className="text-4xl font-medium">Invest in everything</p>
        <p className="text-2xl">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        <button className="py-3 mt-4 px-8 text-xl bg-[#387ED1] rounded-md w-fit text-white">
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Hero;
