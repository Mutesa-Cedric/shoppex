import React from 'react'
import { MdModeEditOutline } from 'react-icons/md'
function ShoppingList() {
    return (
        <div className='h-3/4 px-2 pt-4 w-full'>
            <div className="flex justify-between mb-4">
                <h1 className="font-bold  text-[22px] leading-[30px] text-[#34333A] ">Shopping list</h1>
                <MdModeEditOutline size={24} className={"cursor-pointer"} />
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
    )
}

export default ShoppingList