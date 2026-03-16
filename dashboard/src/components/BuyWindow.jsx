import React, { useState } from "react";
import api from "../utils/axios";

const BuyWindow = ({ uid, stockCurrPrice, close }) => { 
  const [stockQty, setStockQty] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBuyClick = async () => {
    setIsSubmitting(true);
    try {
      const orderReq = await api.post("/newOrder", {
        name: uid,
        qty: Number(stockQty),
        price: stockCurrPrice,
        mode: "BUY",
      });      
      close(); 
      window.location.reload(); 
    } catch (error) {
      console.error("Order failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-96 flex flex-col gap-8">
        
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold text-blue-600">Buy {uid}</h2>
          <span className="text-sm font-medium text-gray-500">{stockCurrPrice}</span>
        </div>

        <div className="flex justify-between gap-4">
          <input
            type="number"
            name="qty"
            id="qty"
            min="1"
            className="w-1/2 p-3 border rounded-md border-gray-300 outline-none focus:border-blue-500"
            placeholder="Qty"
            onChange={(e) => setStockQty(e.target.value)}
            value={stockQty}
          />
          <input
            type="text"
            name="price"
            id="price"
            className="w-1/2 p-3 border rounded-md border-gray-200 bg-gray-50 cursor-not-allowed text-gray-500"
            placeholder="Price"
            value={stockCurrPrice}
            disabled
          />
        </div>

        <div className="flex justify-between items-center mt-2">
          <p className="text-sm text-gray-600">
            Margin Req: <span className="font-semibold">₹{(stockCurrPrice * stockQty).toFixed(2)}</span>
          </p>
          
          <div className="flex gap-3">
            <button
              onClick={close} 
              disabled={isSubmitting}
              className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleBuyClick}
              disabled={isSubmitting}
              className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors disabled:bg-blue-300 flex items-center gap-2"
            >
              {isSubmitting ? "Processing..." : "Buy"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BuyWindow;