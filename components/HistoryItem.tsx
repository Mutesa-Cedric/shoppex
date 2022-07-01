import React from 'react'
import { BiCalendar } from "react-icons/bi"
import { IoIosArrowForward } from "react-icons/io"
import { useRecoilState } from 'recoil'
import { ShowHistoryItem } from '../atoms/ItemState'
interface Props {
  name: string
  date: string
  status: string
}
function HistoryItem({ name, date, status }: Props) {
  const [showHistoryItem, setShowHistoryItem] = useRecoilState(ShowHistoryItem)
  return (
    <div className='flex items-center justify-between bg-white shadow-sm rounded-xl w-full py-4 px-6 my-4'>
      <p className='font-bold leading-7'>{name}</p>
      <div className="flex items-center w-max justify-between space-x-8">
        <div className='flex items-center space-x-2 '>
          <BiCalendar color='#C1C1C4' size={20} fontWeight="bold" />
          <p className="text-[#C1C1C4] text-[13px]">{date}</p>
        </div>
        {status === 'completed' &&
          <p className='px-4 py-1 text-[#56CCF2] border border-[#56CCF2] rounded-md font-semibold'>completed</p>}
        {status === 'cancelled' && <p className='px-5 py-1 text-[#EB5757] border border-[#EB5757] font-semibold rounded-md'>cancelled</p>}
        <IoIosArrowForward color='#F9A109' size={20} className="cursor-pointer hover:translate-x-1 transition-all duration-300"
          onClick={() => setShowHistoryItem(true)} />
      </div>
    </div>
  )
}

export default HistoryItem