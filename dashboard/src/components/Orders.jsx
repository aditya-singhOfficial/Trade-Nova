import React from 'react'

const Orders = () => {
  return (
    <div className='w-full mt-12'>
      <div className='flex items-center flex-col gap-6'>
        <h1 className='text-center text-[#9B9B9B]'>You haven't placed any order today</h1>
        <button className='bg-purple-600 text-white px-3 rounded-md py-2 w-fit'>Get Started</button>
      </div>
    </div>
  )
}

export default Orders
