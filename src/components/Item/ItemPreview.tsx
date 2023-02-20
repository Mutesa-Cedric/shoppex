import Image from 'next/image';
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useRecoilState, useRecoilValue } from 'recoil'
import { currentSideBar } from '../../state/CurrentPageState'
import { ItemToSave, listItems } from '../../state/ItemState';

function ItemPreview() {
  const [activeSideBar, setActiveSideBar] = useRecoilState(currentSideBar);
  const itemToSave = useRecoilValue(ItemToSave);
  const [list, setListItems] = useRecoilState(listItems)
  const deleteItem = () => {

  }

  const addToList = () => {
    setListItems([...list, itemToSave.name])
    setActiveSideBar('viewItems')
  }
  return (
    <div className='h-full font-quicksand  w-[25.1%] bg-white  lg:flex hidden items-center flex-col'>
      <div className="flex flex-col h-full w-full justify-between px-6 py-6">
        <div className='flex w-max text-[#F9A109] text-sm cursor-pointer items-center justify-between font-extrabold space-x-2 transition-all hover:translate-x-1.5 duration-400 mb-4'
          onClick={() => setActiveSideBar("viewItems")}>
          <BiArrowBack />
          <span>Back</span>
        </div>
        <div className="flex items-center">
          <Image src={itemToSave.image} width={300} height={219} className="rounded-[25px]" />
        </div>
        <div>
          <p className="text-[13px] text-[#C1C1C4] leading-4 pb-1">name</p>
          <p className='text-[17px] font-semibold leading-[22px]'>{itemToSave.name}</p>
        </div>
        <div>
          <p className="text-[13px] text-[#C1C1C4] leading-4 pb-1">category</p>
          <p className='text-[17px] font-semibold leading-[22px]'>{itemToSave.category}</p>
        </div>
        <div>
          <p className="text-[13px] text-[#C1C1C4] leading-4 pb-1">note</p>
          <p className='text-[17px] font-semibold leading-[22px]'>{itemToSave.note}</p>
        </div>
        <div className='flex justify-center items-center space-x-12 '>
          <button
            className='text-[#34333A]  font-extrabold'
            onClick={deleteItem}>delete</button>
          <button
            className='py-3 bg-primary text-white text-sm px-7 rounded-xl font-bold'
            onClick={addToList}>Add to list</button>
        </div>
      </div>
    </div>
  )
}

export default ItemPreview