import Image from 'next/image'
import React from 'react'
import { MdModeEditOutline } from "react-icons/md"
import { useRecoilState, useRecoilValue } from 'recoil'
import { currentSideBar } from '../../atoms/CurrentPageState';
import { listItems } from '../../atoms/ItemState';
import NoItem from './NoItem';
import ShoppingList from '../UI/ShoppingList';
function ItemSideBar() {
  const [activeSideBar, setActiveSideBar] = useRecoilState(currentSideBar);
  const items = useRecoilValue(listItems);

  return (
    <div className="h-full font-quicksand  shadow-sm lg:flex hidden flex-col">
      <div className='bg-secondary w-full pl-10 pt-6 pr-6 h-5/6'>
        <div className='bg-[hsl(340,28%,39%)] relative rounded-3xl w-full h-32 flex items-center justify-around  mb-4'>
          <div className='absolute bottom-[-12px] left-3'>
            <Image src={'/images/source.svg'} height={190} width={70} />
          </div>
          <div className="flex flex-col items-start ml-32 justify-between text-white space-y-4">
            <span className=" w-5/6 leading-5  font-bold">Didn&apos;t find what you need?</span>
            <button className='px-8 bg-white text-[#34333A] text-sm leading-[17.4px] font-semibold py-3 rounded-xl'
              onClick={() => setActiveSideBar("addItem")}>
              Add item
            </button>
          </div>
        </div>
        {
          items.length === 0 ? <NoItem /> : <ShoppingList />
        }
      </div>
      {
        items.length !== 0 ?
          <div className='bg-white relative h-1/6 flex items-center justify-center'>
            <input type="text" className='border-2 focus:outline-none pl-2 border-r-0 rounded-lg py-[10px] w-4/6  border-primary
            placeholder:text-[#BDBDBD] text-gray-600'
              placeholder='Enter a name' />
            <button className="py-[14px] absolute right-11 bg-primary text-white px-6 text-[16px] leading-[20px] rounded-lg ">Save</button>
          </div>
          :
          <div className='bg-white relative h-1/6 flex items-center justify-center'>
            <input disabled type="text" className='border-2 focus:outline-none pl-2 border-r-0 rounded-lg py-[10px] w-4/6  border-[#C1C1C4]
          placeholder:text-[#BDBDBD] text-gray-600'
              placeholder='Enter a name' />
            <button disabled className="py-[14px] absolute right-11 bg-[#C1C1C4] text-white px-6 text-[16px] leading-[20px] rounded-lg ">Save</button>
          </div>
      }
    </div>

  )
}
export default ItemSideBar