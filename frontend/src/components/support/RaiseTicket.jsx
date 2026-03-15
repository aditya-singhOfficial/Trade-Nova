import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { SiBuildkite } from "react-icons/si";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaCircleNotch } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
const RaiseTicket = () => {
  return (
    <div className="w-full flex justify-center mt-32">
      <div className="w-[75%]">
        <h1 className="text-2xl">
          To Create a ticket, select a relevant topic
        </h1>
        <div className="grid gap-6 gap-y-12 grid-cols-3 mt-12">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl flex items-center gap-2">
              <FiPlusCircle />
              Account Opening
            </h1>
            <ul className="flex flex-col gap-3 mt-3">
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Resident individual</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Minor</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Non Resident Indian (NRI)</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Company, Partnership, HUF and LLP</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Glossary</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 ">
            <h1 className="text-xl flex items-center gap-2">
              <FaRegUserCircle />
              Your Zerodha Account
            </h1>
            <ul className="flex flex-col gap-3 mt-3">
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Your Profile</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Account modification</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">
                Client Master Report (CMR) and Depository Participant (DP)
              </li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Nomination</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Transfer and conversion of securities</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl flex items-center gap-2">
              <SiBuildkite />
              Kite
            </h1>
            <ul className="flex flex-col gap-3 mt-3">
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">IPO</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Trading FAQs</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Margin Trading Facility (MTF) and Margins</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Charts and orders</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Alerts and Nudges</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">General</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl flex items-center gap-2">
              <RiMoneyRupeeCircleFill />
              Funds
            </h1>
            <ul className="flex flex-col gap-3 mt-3">
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Add money</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Withdraw money</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Add bank accounts</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">eMandates</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl flex items-center gap-2">
              <FaCircleNotch />
              Console
            </h1>
            <ul className="flex flex-col gap-3 mt-3">
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Portfolio</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Corporate actions</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Funds statement</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Reports</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Profile</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Segments</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl flex items-center gap-2">
              <FaCoins />
              Coins
            </h1>
            <ul className="flex flex-col gap-3 mt-3">
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Mutual funds</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">National Pension Scheme (NPS)</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Fixed Deposit (FD)</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Features on Coin</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">Payments and Orders</li>
              <li className="text-[#397DD0] cursor-pointer hover:text-black transition-all ease-in-out duration-100 w-fit">General</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaiseTicket;
