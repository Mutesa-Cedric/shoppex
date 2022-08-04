import Image from 'next/image'
import React from 'react'
import { MdCancel, MdModeEditOutline } from "react-icons/md"
import { useRecoilState, useRecoilValue } from 'recoil'
import { currentSideBar, showItemNav } from '../../atoms/CurrentPageState';
import { listItems } from '../../atoms/ItemState';
import NoItem from './NoItem';
import ShoppingList from '../UI/ShoppingList';

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  listName: string
};


function ItemSideBar() {
  const [activeSideBar, setActiveSideBar] = useRecoilState(currentSideBar);
  const items = useRecoilValue(listItems);
  const [show, setShow] = useRecoilState(showItemNav);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
  };
  return (
    <div className="h-full font-quicksand md:ml-0 ml-20  shadow-sm lg:flex hidden flex-col"
      style={{ display: `${show ? "flex" : ''}` }}>
      <div className='bg-secondary w-full relative pl-10 pt-6 pr-6 h-5/6'>
        <div className='md:hidden flex mx-auto absolute top-0 right-32' onClick={() => setShow(false)}>
          <MdCancel fill='hsl(340,28%,39%)' size={32} />
        </div>
        <div className='bg-[hsl(340,28%,39%)] md:mt-0 mt-4 relative rounded-3xl w-full py-3 flex items-center justify-around  mb-4'>
          <div className='absolute bottom-[-12px] left-3'>
            <Image src={'/images/source.svg'} height={190} width={70} />
          </div>
          <div className="flex flex-col items-start ml-32 justify-between text-white space-y-4">
            <span className=" md:w-5/6 leading-5  font-bold">Didn&apos;t find what you need?</span>
            <button className='md:px-8 px-3 bg-white text-[#34333A] text-sm leading-[17.4px] font-semibold md:py-3 py-2 rounded-xl'
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
          <div className='bg-white relative h-1/6 flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex w-full items-center justify-center' >
              <input type="text" className='border-2 focus:outline-none pl-2 border-r-0 rounded-lg py-[10px] w-4/6  border-primary
            placeholder:text-[#BDBDBD] text-gray-600'
                {...register("listName", { required: true })}
                placeholder='Enter a name' />
              <button type='submit' className="py-[14px] absolute right-11 bg-primary text-white px-6 text-[16px] leading-[20px] rounded-lg ">Save</button>
            </form>
            {errors.listName?.type === 'required' && (
              <p className="formError">list name is required !</p>
            )}
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