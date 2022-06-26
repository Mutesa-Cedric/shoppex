import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useRecoilState, useRecoilValue } from 'recoil'
import { ShowHistoryItem } from '../atoms/HistoryItemState'
import { Item } from '../typings'

interface ItemProps {
  name: string
  qty: number
}

let CookieItem = ({ name, qty }: ItemProps) => {
  return (
    <div className='flex bg-white items-center space-x-6 shadow-sm rounded-xl py-4 px-4 '>
      <p className='text-center text-xl font-bold'>{name}</p>
      <p className='text-center text-[#F9A109]'>{qty} pcs</p>
    </div>
  )
}

let BeverageItem = ({ name, qty }: ItemProps) => {
  return (
    <div className='flex bg-white items-center space-x-6 shadow-sm rounded-xl py-4 px-4 '>
      <p className='text-center text-xl font-bold'>{name}</p>
      <p className='text-center text-xl'>{qty}</p>
    </div>
  )
}


function ViewHistoryItem({ name, date, cookies, beverages }: Item) {
  const [showHistoryItem, setShowHistoryItem] = useRecoilState(ShowHistoryItem)
  return (
    <div>
      <div className='flex text-[#F9A109] cursor-pointer'
        onClick={() => setShowHistoryItem(false)}>
        <BiArrowBack />
        <span>Back</span>
      </div>
      <p>{date}</p>
      <div className="flex flex-col">
        <h1 className='font-bold text-xl'>Cookies</h1>
        <div className="flex space-x-8">
          {cookies.map(cookie => {
            return <CookieItem name={cookie.name} qty={cookie.qty} />
          })}
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className='font-bold text-xl'>Beverages</h1>
        <div className="flex space-x-8">
          {beverages.map(beverage => {
            return <BeverageItem name={beverage.name} qty={beverage.qty} />
          }
          )}
        </div>
      </div>
    </div>
  )
}

export default ViewHistoryItem