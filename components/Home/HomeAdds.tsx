import Image from 'next/image'
import React from 'react'

function HomeAds() {
  return (
    <div className='flex justify-between items-center w-full px-[170px] py-12'>
      <div className="flex flex-col space-y-5 w-2/4">
        <h1 className="font-bold text-4xl max-w-lg">We provide the best interface for shopping list management.</h1>
        <p className="text-black/75 font-bold pb-6 max-w-lg ">Shoppex  is here to give you a clear and simple way to help you manage all you shopping items in case you&apos;re going to the market. Don&apos;t face pain when shopping...</p>
        <button className='text-primary border-2 border-primary rounded-[20px] px-6 py-2 w-2/4 font-bold hover:bg-primary hover:text-white transition-all duration-500'>
          Get started now
        </button>
      </div>
      <div className='relative'>
        <Image src={'/images/inside.png'} alt="inside" width={500} height={300} className="shadow-lg z-50" />
        <svg className="absolute -top-28 -right-16" width="310" height="230" viewBox="0 0 370 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46.5001 78.0001C-36.0432 105.765 12.2149 197.288 52.6283 247.594C57.5103 253.671 64.9656 256.959 72.7566 257.214C98.6939 258.062 137.733 261.635 151 271.5C170.5 286 204.5 280 312.5 257C420.5 234 342.5 198.5 335.5 65.5001C328.5 -67.4999 156.5 41.0001 46.5001 78.0001Z" fill="#FF8A00" stroke="#FF8A00" />
        </svg>
      </div>
    </div>
  )
}

export default HomeAds