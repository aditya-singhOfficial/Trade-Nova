import React, { useState } from "react";

const BuyWindow = ({uid}) => {
  const [isWindowOpen, setIsWindowOpen] = useState(true);
  const handleClose = () => {
    setIsWindowOpen(false);
  };
  console.log(uid);
  
  return (
    isWindowOpen && (
      <div className="w-85 absolute top-0 -right-85 bg-white p-4 flex flex-col gap-8">
        <div className="flex justify-between">
          <input
            type="text"
            name="qty"
            id="qty"
            className="w-[45%] p-3 border-2 border-[#EEEE]"
            placeholder="Qty"
          />
          <input
            type="text"
            name="price"
            id="price"
            className="w-[45%] p-3 border-2 border-[#EEEE]"
            placeholder="Price"
          />
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Margin Required $140.25</p>
          <div className="flex gap-3">
            <button className="px-2 cursor-pointer rounded-md py-1 bg-blue-400 text-white">
              Buy
            </button>
            <button
              onClick={() => {
                handleClose();
              }}
              className="px-2 rounded-md py-1 bg-gray-400 text-gray-50 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default BuyWindow;
