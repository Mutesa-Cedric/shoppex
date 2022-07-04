import Image from 'next/image'
function NoItem() {
    return (
        <div className="w-full h-5/6 flex flex-col relative items-center justify-evenly bg-inherit">
            <div className='flex text-[#34333A] font-extrabold text-2xl mb-32'>
                No item
            </div>
            <div className=' absolute bottom-0 z-50'>
                <Image src={'/images/cart.svg'} alt="cart image" width={250} height={250} />
            </div>
        </div>
    )
}
export default NoItem