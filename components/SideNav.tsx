import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { AiOutlineMenu, AiOutlineReload, AiOutlineShoppingCart } from 'react-icons/ai'
import { TbDeviceAnalytics } from "react-icons/tb"
import { useRecoilState } from 'recoil';
import { currentPageState } from '../atoms/CurrentPageState';

function SideNav() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const currentPageStyle = {
    borderColor: '#F9A109',
    borderLeftWidth: '6px'
  }
  return (
    <div className=' h-screen w-20 bg-white shadow-sm flex flex-col items-center justify-between py-10'>
      <Image src="/images/logo.svg" width={50} height={50} />
      <div className="space-y-9 font-bold w-full flex  flex-col">
        <div className="w-full flex justify-center items-center py-3" style={currentPage === "items" ? currentPageStyle : {}}>
          <Link href={'/'} >
            <AiOutlineMenu   className="cursor-pointer" size={24} color="#454545" fontWeight={800} onClick={() => setCurrentPage("items")} />
          </Link>
        </div>
        <div className="w-full flex justify-center items-center py-3" style={currentPage === "history" ? currentPageStyle : {}}>
          <Link href={'/history'} >
            <AiOutlineReload   className="cursor-pointer" size={24} color="#454545" fontWeight={800} onClick={() => setCurrentPage("history")} />
          </Link>
        </div>
        <div className="w-full flex justify-center items-center py-3" style={currentPage === "statistics" ? currentPageStyle : {}}>
          <Link href='/statistics' >
            <TbDeviceAnalytics className="cursor-pointer"   size={24} color="#454545" fontWeight={800} onClick={() => setCurrentPage("statistics")} />
          </Link>
        </div>
      </div>
      <div className='bg-primary relative flex items-center cursor-pointer justify-center h-12 w-12 rounded-full'>
        <AiOutlineShoppingCart size={28} color="white" />
        <div className='absolute flex items-center text-white justify-center h-6 w-6 text-sm font-bold bottom-7 right-0 rounded-md bg-[#EB5757]'>
          3
        </div>
      </div>
    </div>
  )
}

export default SideNav