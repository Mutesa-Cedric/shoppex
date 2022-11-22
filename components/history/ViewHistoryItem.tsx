import React from 'react'
import { BiArrowBack, BiCalendar } from 'react-icons/bi'
import { useRecoilState, useRecoilValue } from 'recoil'
import { ShowHistoryItem } from '../../state/ItemState'
import { Item } from '../../typings'

interface ItemProps {
  name: string
  qty: number
}

let CookieItem = ({ name, qty }: ItemProps) => {
  return ( 
    <div className='flex bg-white items-center space-x-20 shadow-sm rounded-xl py-3 px-4 '>
      <p className='text-center text-lg font-bold'>{name}</p>
      <p className='text-center text-[13px] font-bold text-[#F9A109]'>{qty} pcs</p>
    </div>
  )
}

let BeverageItem = ({ name, qty }: ItemProps) => {
  return (
    <div className='flex bg-white items-center space-x-20 shadow-sm rounded-xl py-3 px-4 '>
      <p className='text-center text-lg font-bold'>{name}</p>
      <p className='text-center text-[13px] font-bold text-[#F9A109]'>{qty} pcs</p>
    </div>
  )
}


function ViewHistoryItem({ name, date, cookies, beverages }: Item) {
  const [showHistoryItem, setShowHistoryItem] = useRecoilState(ShowHistoryItem)
  return (
    <div className='w-full px-16 pt-12'>
      <div className='flex w-max text-[#F9A109] cursor-pointer items-center font-extrabold space-x-2 transition-all hover:translate-x-1.5 duration-400 mb-4'
        onClick={() => setShowHistoryItem(false)}>
        <BiArrowBack />
        <span>Back</span>
      </div>
      <p className='text-3xl font-extrabold py-3'>{name}</p>
      <p className='text-[13px] font-medium text-[#C1C1C4] pb-8 flex items-center'><BiCalendar className='mr-2' />{date}</p>
      <div>
        <div className="flex flex-col mb-8">
          <h1 className='font-bold text-[18px] pb-2 pl-2'>Cookies</h1>
          <div className="flex space-x-12">
            {cookies.map(cookie => {
              return <CookieItem name={cookie.name} qty={cookie.qty} />
            })}
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className='font-bold text-[18px] pb-2 pl-2'>Beverages</h1>
          <div className="flex space-x-8">
            {beverages.map(beverage => {
              return <BeverageItem name={beverage.name} qty={beverage.qty} />
            }
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ViewHistoryItem