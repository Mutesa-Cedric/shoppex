import Image from 'next/image'
import React from 'react'
import { MdModeEditOutline } from "react-icons/md"
function ItemSideBar() {
  return (
    <div className="w-[26%] font-quicksand  shadow-sm flex flex-col">
      <div className='bg-secondary w-full h-5/6 pl-10 pt-6 pr-6'>
        <div className='bg-[hsl(340,28%,39%)] relative rounded-3xl w-full h-32 flex items-center justify-around  mb-4'>
          <div className='absolute bottom-[-12px] left-3'>
            <Image src={'/images/source.svg'} height={190} width={70} />
          </div>
          <div className="flex flex-col items-start ml-32 justify-between text-white space-y-4">
            <span className=" w-5/6 leading-5  font-bold">Didn&apos;t find what you need?</span>
            <button className='px-8 bg-white text-[#34333A] text-sm leading-[17.4px] font-semibold py-3 rounded-xl'>
              Add item
            </button>
          </div>
        </div>
        <div className='h-3/4 px-2 pt-4 w-full'>
          <div className="flex justify-between mb-4">
            <h1 className="font-bold  text-[22px] leading-[30px] text-[#34333A] ">Shopping list</h1>
            <MdModeEditOutline size={24} />
          </div>
          <div>
            <div>
              <h1 className="font-medium text-[#828282] leading-[17.4px] mb-4 mt-6">Fruit and vegetables</h1>
              <div className="flex justify-between items-center mb-3">
                <p className="capitalize text-[17px] font-semibold">Avocado</p>
                <span className=" text-primary border-2 border-primary py-1 px-5 text-[12px] leading-4 font-bold rounded-3xl">3PCS</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p className="capitalize text-[17px] font-semibold">Pre-cooked corn 450g</p>
                <span className=" text-primary border-2 border-primary py-1 px-5 text-[12px] leading-4 font-bold rounded-3xl">1PCS</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p className="capitalize text-[17px] font-semibold">Chicken 2KG</p>
                <span className=" text-primary border-2 border-primary py-1 px-5 text-[12px] leading-4 font-bold rounded-3xl">3PCS</span>
              </div>
            </div>

          </div>
          <div>
            <div>
              <h1 className="font-medium text-[#828282] leading-[17.4px] mb-4 mt-6">Fruit and vegetables</h1>
              <div className="flex justify-between items-center mb-3">
                <p className="capitalize text-[17px] font-semibold">Avocado</p>
                <span className=" text-primary border-2 border-primary py-1 px-5 text-[12px] leading-4 font-bold rounded-3xl">3PCS</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p className="capitalize text-[17px] font-semibold">Chicken 1KG</p>
                <span className=" text-primary border-2 border-primary py-1 px-5 text-[12px] leading-4 font-bold rounded-3xl">1PCS</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p className="capitalize text-[17px] font-semibold">Pork fillets 450g</p>
                <span className=" text-primary border-2 border-primary py-1 px-5 text-[12px] leading-4 font-bold rounded-3xl">1PCS</span>
              </div><div className="flex justify-between items-center mb-3">
                <p className="capitalize text-[17px] font-semibold">Pre-cooked corn 450g</p>
                <span className=" text-primary border-2 border-primary py-1 px-5 text-[12px] leading-4 font-bold rounded-3xl">1PCS</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='bg-white relative h-1/6 flex items-center justify-center'>
        <input type="text" className='border-2 focus:outline-none pl-2 border-r-0 rounded-lg py-[10px] w-4/6  border-primary
          placeholder:text-[#BDBDBD] text-gray-600'
          placeholder='Enter a name' />
        <button className="py-[14px] absolute right-11 bg-primary text-white px-6 text-[16px] leading-[20px] rounded-lg ">Save</button>
      </div>
    </div>

  )
}
export default ItemSideBar