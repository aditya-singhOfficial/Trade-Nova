import React from 'react'

const Positions = () => {
  return (
    <div  className="w-full">
      <h1 className="border-b-2 p-6 text-3xl w-full border-[#EEEEEE]">
        Positions(2)
      </h1>
      <div className="w-full">
        <table className="w-full border-b-2 border-[#EEEEEE]">
          <thead className="border-b border-gray-200">
            <tr className="text-gray-500 text-left">
              <th className="p-6 w-1/3">Product</th>
              <th className="p-6">Investment</th>
              <th className="p-6">Qty.</th>
              <th className="p-6">Avg.</th>
              <th className="p-6">LTP</th>
              <th className="p-6">P&L</th>
              <th className="p-6">Chng.</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default Positions
