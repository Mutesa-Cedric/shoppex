import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
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
  const [hover, setHover] = useState({
    menu: false,
    history: false,
    analytics: false
  })
  return (
    <div className=' h-screen w-20 bg-white shadow-sm flex flex-col items-center justify-between py-10'>
      <Image src="/images/logo.svg" width={50} height={50} />
      <div className="space-y-9 font-bold w-full flex  flex-col">
        <div className="w-full flex relative justify-center items-center py-3" style={currentPage === "items" ? currentPageStyle : {}}>
          <Link href={'/'} >
            <AiOutlineMenu onMouseEnter={() => setHover((prevState) => {
              return {
                ...prevState,
                menu: true
              }
            })} onMouseLeave={() => setHover((prevState) => {
              return {
                ...prevState, menu: false
              }
            })} className="cursor-pointer" size={24} color={hover.menu ? "#F9A109" : "#454545"} fontWeight={800} onClick={() => setCurrentPage("items")} />
          </Link>
          <div className='absolute bg-[#454545]'></div>
          <div className='absolute left-[70%] bg-[#454545] text-white rounded-md'
            style={hover.menu ? { display: "flex" } : { display: "none" }}>
            <span className='px-4 rounded-[20px] text-[13px] font-normal py-[2px]'>Menu</span>
          </div>
        </div>
        <div className="w-full flex relative justify-center items-center py-3" style={currentPage === "history" ? currentPageStyle : {}}>
          <Link href={'/history'} >
            <AiOutlineReload onMouseEnter={() => setHover((prevState) => {
              return {
                ...prevState,
                history: true
              }
            })} onMouseLeave={() => setHover((prevState) => {
              return {
                ...prevState, history: false
              }
            })} className="cursor-pointer" size={24} color={hover.history ? "#F9A109" : "#454545"} fontWeight={800} onClick={() => setCurrentPage("history")} />
          </Link>
          <div className='absolute bg-[#454545]'></div>
          <div className='absolute left-[70%] bg-[#454545] text-white rounded-md'
            style={hover.history ? { display: "flex" } : { display: "none" }}>
            <span className='px-4 rounded-[20px] text-[13px] font-normal py-[2px]'>History</span>
          </div>
        </div>
        <div className="w-full flex relative justify-center items-center py-3" style={currentPage === "statistics" ? currentPageStyle : {}}>
          <Link href='/statistics' >
            <TbDeviceAnalytics onMouseEnter={() => setHover((prevState) => {
              return {
                ...prevState,
                analytics: true
              }
            })} onMouseLeave={() => setHover((prevState) => {
              return {
                ...prevState, analytics: false
              }
            })} className="cursor-pointer" size={24} color={hover.analytics ? "#F9A109" : "#454545"} fontWeight={800} onClick={() => setCurrentPage("statistics")} />
          </Link>
          <div className='absolute bg-[#454545]'></div>
          <div className='absolute left-[70%] bg-[#454545] text-white rounded-md' 
          style={hover.analytics ? {display:"flex"} :{display:"none"}}>
            <span className='px-4 rounded-[20px] text-[13px] font-normal py-[2px]'>statistics</span>
          </div>
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