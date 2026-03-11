import React from "react";
import Ecosystem from "../../assets/images/ecosystem.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Stats = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-32">
        <div className="w-[75%] flex justify-between">
          <div className="w-[38%] flex flex-col gap-6">
            <h1 className="text-3xl mb-6">Trust with confidence</h1>
            <div>
              <h2 className="text-xl font-normal mb-2">
                Customer-first always
              </h2>
              <h3 className="text-md text-gray-600">
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments, making us India’s largest broker;
                contributing to 15% of daily retail exchange volumes in India.
              </h3>
            </div>
            <div>
              <h2 className="text-xl font-normal mb-2">No spam or gimmicks</h2>
              <h3 className="text-md text-gray-600">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like. Our philosophies.
              </h3>
            </div>
            <div>
              <h2 className="text-xl font-normal mb-2">The Zerodha universe</h2>
              <h3 className="text-md text-gray-600">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </h3>
            </div>
            <div>
              <h2 className="text-xl font-normal mb-2">
                Do better with moneys
              </h2>
              <h3 className="text-md text-gray-600">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </h3>
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-4">
            <img src={Ecosystem} alt="" className="w-[95%]" />
            <div className="mx-auto flex gap-6 ">
              <Link
                to={"/products"}
                className="text-blue-400 hover:text-black transition-all ease-in-out duration-200 font-medium flex gap-2 items-center cursor-pointer"
              >
                Explore our products <FaArrowRight />
              </Link>
              <Link
                to={"/"}
                className="text-blue-400 hover:text-black transition-all ease-in-out duration-200 font-medium flex gap-2 items-center cursor-pointer"
              >
                Try Kite demo
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
