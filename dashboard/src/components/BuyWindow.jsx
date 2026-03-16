import React, { useState } from "react";
import api from "../utils/axios";
const BuyWindow = ({ uid, stockCurrPrice }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(true);
  const [stockQty, setStockQty] = useState(1);

  const handleBuyClick = async () => {
    const orderReq = await api.post("/newOrder", {
      name: uid,
      qty: stockQty,
      price: stockCurrPrice,
      mode: "BUY",
    });
    console.log(orderReq);

    setIsWindowOpen(false);

    window.location.reload();
  };

  const handleClose = () => {
    setIsWindowOpen(false);
  };

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
            onChange={(e) => {
              setStockQty(e.target.value);
            }}
            value={stockQty}
          />
          <input
            type="text"
            name="price"
            id="price"
            className="w-[45%] p-3 border-2 border-[#EEEE] cursor-not-allowed"
            placeholder="Price"
            value={stockCurrPrice}
            disabled
          />
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Margin Required $140.25</p>
          <div className="flex gap-3">
            <button
              onClick={() => handleBuyClick()}
              className="px-2 cursor-pointer rounded-md py-1 bg-blue-400 text-white"
            >
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
