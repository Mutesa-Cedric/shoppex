import React from 'react'
import {BiCalendar} from "react-icons/bi"
import {IoIosArrowForward} from "react-icons/io"
interface Props {
  name: string
  date: string
  status: string
}
function HistoryItem({ name, date, status }: Props) {
  return (
    <div className='flex items-center justify-between bg-white shadow-md rounded-lg w-full py-4 px-6 my-4'>
        <p className='font-bold my-4'>{name}</p>
        <div className='flex items-center'>
          <BiCalendar/>
          <p>{date}</p>
        </div>
        <p>{status}</p>
        <IoIosArrowForward color='#F9A109'/>
    </div>
  )
}

export default HistoryItem