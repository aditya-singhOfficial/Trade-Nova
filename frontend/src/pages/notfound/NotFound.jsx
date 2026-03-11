import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="w-full flex justify-center mt-32 mb-32">
      <div className="w-[75%] flex flex-col items-center gap-6">
        <p className="text-center text-3xl">Sorry! The page you are looking for does not here</p>
        <Link to={"/"} className="py-3 mt-4 px-8 text-xl bg-[#387ED1] rounded-md w-fit text-white">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
