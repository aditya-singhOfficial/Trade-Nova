import React from "react";
import kiteURL from "../../assets/images/kite.png";
import appstoreBadge from "../../assets/images/appstoreBadge.svg";
import googlePlayBadge from "../../assets/images/googlePlayBadge.svg";
import { FaArrowRight } from "react-icons/fa6";
const LeftImage = ({
  imageURL,
  productName,
  productDescription,
  tryDemo = true,
  learnMore = true,
}) => {
  return (
    <div className="w-full flex justify-center mt-32">
      <div className="w-[75%] flex justify-between">
        <div className="w-[55%]">
          <img src={kiteURL} alt="kite" className="w-[80%]"/>
        </div>
        <div className="w-[40%] flex flex-col gap-6 justify-center">
          <h1 className="text-2xl">Kite</h1>
          <h2 className="text-md text-[#424242]">
            Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.
          </h2>
          <div className="flex gap-6">
            {tryDemo && (
              <p className="flex items-center gap-2 text-[#387ED1]">
                Try demo <FaArrowRight size={16} />
              </p>
            )}
            {learnMore && (
              <p className="flex items-center gap-2 text-[#387ED1]">
                Learn More <FaArrowRight size={16} />
              </p>
            )}
          </div>
          <div className="flex justify-between w-[65%]">
            <img src={googlePlayBadge} alt="" />
            <img src={appstoreBadge} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImage;
