import Image from 'next/image'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useRouter } from 'next/router'
function HomeBanner() {
  const router = useRouter();
  return (
    <div className='w-full h-auto flex justify-between px-[170px]'>
      <div className='flex flex-col space-y-20 relative'>
        <div className="space-y-10 z-50">
          <div className='space-y-3'>
            <h1 className='text-[52px] leading-[60px] font-bold max-w-xl'>Take your shopping list wherever you go.</h1>
            <p className='text-lg font-bold text-gray-500'>Shoppex is the best option for making shopping plan in easy steps.</p>
          </div>
          <button className='text-white bg-[#FF8A00] hover:bg-primary rounded-[64px] py-[9px] uppercase px-10 ' onClick={() => router.push('/welcome?mode=signup')}>
            <span >Make Your List</span>
          </button>
        </div>
        <div className="flex space-x-12 items-center ml-12">
          <div className="flex flex-col items-center space-y-1">
            <h1 className="font-bold">1k+</h1>
            <p className="text-black/75 font-bold text-sm">Happy users</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <h1 className="font-bold">12.5k+</h1>
            <p className="text-black/75 font-bold text-sm">Shopping lists made</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <h1 className="font-bold">500+</h1>
            <p className="text-black/75 font-bold text-sm">Reviews</p>
          </div>
        </div>
        <div className="absolute left-0 -bottom-12 h-[450px] w-[340px]"
          style={{ background: 'linear-gradient(92.3deg, rgba(255, 138, 0, 0.25) -4.35%, rgba(217, 217, 217, 0) 97.96%)', filter: 'blur(103px)' }}>

        </div>
      </div>

      <div className='relative '>
        <Image src={'/images/bannerImg.png'} alt="banner" width={360} height={310} />
        <div className='absolute top-6 -left-28 bg-[#FAFAFE] rounded-[20px]'>
          <div className=" flex items-center px-5 py-4 rounded-[20px]  shadow-xl"
            style={{ background: 'linear-gradient(78.49deg, #34A853 -45.32%, rgba(255, 255, 255, 0) 57.28%)' }}>
            <div>
              <h1 className='font-bold text-[20px] leading-[20px]'>Cabbages</h1>
              <p className='text-[#FBBC05] text-sm font-bold'>20pcs</p>
            </div>
            <div className='w-4 flex items-center justify-center rounded-full h-4 bg-primary mt-1 ml-1'>
              <AiOutlinePlus fill='white' size={12} />
            </div>
          </div>
        </div>

        <div className='absolute -top-10 left-[9.4rem] bg-[#FAFAFE] rounded-[20px]'>
          <div className=" flex items-center px-8 py-[1.2rem] rounded-[20px]  shadow-xl"
            style={{ background: 'linear-gradient(78.49deg, #FBBC05 -45.32%, rgba(255, 255, 255, 0) 57.28%)' }}>
            <div>
              <h1 className='font-bold text-[20px] leading-[20px]'>Bananas</h1>
              <p className='text-[#FBBC05] text-sm font-bold'>20pcs</p>
            </div>
            <div className='w-4 flex items-center justify-center rounded-full h-4 bg-primary mt-3 ml-6'>
              <AiOutlinePlus fill='white' size={12} />
            </div>
          </div>
        </div>

        <div className='absolute bottom-7 -left-24  bg-[#FAFAFE] rounded-[20px]'>
          <div className=" flex items-center px-7 py-[1.2rem] rounded-[20px]  shadow-xl"
            style={{ background: 'linear-gradient(78.49deg, #F44747 -45.32%, rgba(255, 255, 255, 0) 57.28%)' }}>
            <div>
              <h1 className='font-bold text-[20px] leading-[20px]'>Mutzig</h1>
              <p className='text-[#FBBC05] text-sm font-bold'>20pcs</p>
            </div>
            <div className='w-4 flex items-center justify-center rounded-full h-4 bg-primary mt-2 ml-8'>
              <AiOutlinePlus fill='white' size={12} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeBanner