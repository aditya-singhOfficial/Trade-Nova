import React from "react";
import logo from "../assets/images/logo.svg";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center border border-b-gray-100">
      <div className="w-10/12 py-6 flex justify-between items-center">
        <div className="w-[12vw]">
          <img src={logo} alt="logo" className="w-full" />
        </div>
        <div>
          <ul className=" flex gap-15 items-center">
            {["Signup", "About", "Products", "Pricing", "Support"].map(
              (item, index) => (
                <li className="text-md font-medium cursor-pointer">{item}</li>
              ),
            )}
            <li>
              <IoMenu size={"1.8rem"} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
