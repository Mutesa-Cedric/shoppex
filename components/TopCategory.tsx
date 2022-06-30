import React from 'react'
import { TopItem } from '../typings'

function TopCategory({name,percentage}:TopItem) {
  return (
    <div className='w-[332px] flex flex-col space-y-2'>
      <div className='flex justify-between items-center'>
        <span className='text-sm font-semibold leading-[17.5px]'>{name}</span>
        <span className='text-[14px] leading-[23px] font-semibold '>{percentage}%</span>
      </div>
      <div className="w-full h-[6px] rounded-[4px] bg-[#E0E0E0]">
        <div className="bg-[#56CCF2] h-full rounded-[4px]" style={{width:`${percentage}%`}}></div>
      </div>
    </div>
  )
}

export default TopCategory