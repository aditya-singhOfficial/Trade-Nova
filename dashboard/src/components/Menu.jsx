import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <div className="w-[75%] p-4 pr-8 flex justify-between items-center ">
      <div>
        <img src={logo} className="w-[10%]" alt="" />
      </div>
      <div className="flex gap-6">
        <ul className="flex items-center gap-6">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-black"
              }
              to={"/"}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-black"
              }
              to={"/orders"}
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-black"
              }
              to={"/holdings"}
            >
              Holdings
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-black"
              }
              to={"/positions"}
            >
              Positions
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-black"
              }
              to={"/funds"}
            >
              Funds
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-black"
              }
              to={"/apps"}
            >
              Apps
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-4 items-center border-l-2 pl-4 border-[#EEEEEE]">
          <div className="rounded-full bg-pink-300 py-1 px-1.5">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
