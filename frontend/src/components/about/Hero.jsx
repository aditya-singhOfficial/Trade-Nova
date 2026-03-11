import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[75%] flex justify-center mt-24 pb-24 border-b border-b-gray-200">
        <p className="text-center text-3xl w-[60%]">
          We pioneered the discount broking model in India. Now, we are breaking
          ground with our technology.
        </p>
      </div>
      <div className="w-[75%] flex justify-between">
        <div className="w-[48%] pt-18 pl-18 flex flex-col gap-6">
          <p className="leading-7 text-[18px] text-[#808080]">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p className="leading-7 text-[18px] text-[#808080]">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p className="leading-7 text-[18px] text-[#808080]">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="w-[48%] pt-18 pl-18 flex flex-col gap-6">
          <p className="leading-7 text-[18px] text-[#808080]">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p className="leading-7 text-[18px] text-[#808080]">
            <span className="text-[#387ED1] hover:text-black cursor-pointer transition-all ease-in-out duration-200">Rainmatter</span>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>

          <p className="leading-7 text-[18px] text-[#808080]">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <span className="text-[#387ED1] hover:text-black cursor-pointer transition-all ease-in-out duration-200">blog</span> or see what the media is <span className="text-[#387ED1] hover:text-black cursor-pointer transition-all ease-in-out duration-200">saying about
            us</span> or learn more about our business and product <span className="text-[#387ED1] hover:text-black cursor-pointer transition-all ease-in-out duration-200">philosophies</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
