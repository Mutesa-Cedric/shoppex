import Image from 'next/image'
import React from 'react'
import { AiOutlineMenu, AiOutlineReload, AiOutlineShoppingCart } from 'react-icons/ai'
import { TbDeviceAnalytics } from "react-icons/tb"
function SideNav() {
  return (
    <div className=' h-screen bg-white shadow-sm w-24 flex flex-col items-center justify-between py-10'>
      <Image src="/images/logo.svg" width={50} height={50} />
      <div className="space-y-9 font-bold w-full flex  flex-col">
        <div className="w-full flex justify-center items-center py-3 border-l-[6px] border-primary">
          <AiOutlineMenu size={24} color="#454545" fontWeight={800} />
        </div>
        <div className="w-full flex justify-center items-center py-2">
          <AiOutlineReload size={24} color="#454545" fontWeight={800} />
        </div>
        <div className="w-full flex justify-center items-center py-2">
          <TbDeviceAnalytics size={24} color="#454545" fontWeight={800} />
        </div>
      </div>
      <div className='bg-primary relative flex items-center justify-center h-12 w-12 rounded-full'>
        <AiOutlineShoppingCart size={28} color="white" />
        <div className='absolute flex items-center text-white justify-center h-6 w-6 text-sm font-bold bottom-7 right-0 rounded-md bg-[#EB5757]'>
          3
        </div>
      </div>
    </div>
  )
}

export default SideNav