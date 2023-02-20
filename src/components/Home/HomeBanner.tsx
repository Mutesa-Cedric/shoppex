import Image from 'next/image'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useRouter } from 'next/router'
function HomeBanner() {
  const router = useRouter();
  return (
    <div className='md:w-full w-screen h-auto flex md:flex-row flex-col justify-between md:space-y-0 space-y-20 lg:px-[170px] md:px-[80px] px-4'>
      <div className='flex flex-col md:space-y-20 space-y-8 relative'>
        <div className="md:space-y-10 z-50 space-y-12 md:block flex flex-col items-center">
          <div className='md:space-y-3 space-y-6'>
            <h1 className='lg:text-[52px] md:text-[40px] md:text-start text-center text-3xl md:leading-[60px] font-bold max-w-xl'>Take your shopping list wherever you go.</h1>
            <p className='text-lg font-bold md:text-start text-center text-gray-500'>Shoppex is the best option for making shopping plan in easy steps.</p>
          </div>
          <button
            className='text-white  bg-[#FF8A00] hover:bg-primary rounded-[64px] py-[9px] uppercase px-10 '
            onClick={() => router.push("/welcome?mode=signup")}>
            <span>Make Your List</span>
          </button>
        </div>
        <div className="flex space-x-12 items-center md:justify-start justify-center md:ml-12">
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
        <div
          className="absolute left-0  -bottom-12 h-[450px] w-[340px]"
          style={{ background: 'linear-gradient(92.3deg, rgba(255, 138, 0, 0.25) -4.35%, rgba(217, 217, 217, 0) 97.96%)', filter: 'blur(103px)' }}>
        </div>
      </div>

      <div className='relative '>
        <Image src={'/images/bannerImg.png'} alt="banner" width={360} height={310} />
        <div className='absolute top-6 md:-left-28 -left-6 bg-[#FAFAFE] md:rounded-[20px] rounded-xl'>
          <div className=" flex items-center md:px-5 md:py-4 py-1 px-2 md:rounded-[20px] rounded-xl  shadow-xl"
            style={{ background: 'linear-gradient(78.49deg, #34A853 -45.32%, rgba(255, 255, 255, 0) 57.28%)' }}>
            <div>
              <h1 className='font-bold md:text-[20px] text-sm leading-[20px]'>Cabbages</h1>
              <p className='text-[#FBBC05] text-[12px] font-bold'>20pcs</p>
            </div>
            <div className='md:w-4 w-2 flex items-center justify-center rounded-full md:h-4 h-2 bg-primary mt-1 ml-1'>
              <AiOutlinePlus fill='white' size={12} />
            </div>
          </div>
        </div>

        <div className='absolute md:-top-10 -top-4 left-[9.4rem] bg-[#FAFAFE] rounded-[20px]'>
          <div className=" flex items-center md:px-8 px-3 py-2 md:py-[1.2rem] rounded-[20px]  shadow-xl"
            style={{ background: 'linear-gradient(78.49deg, #FBBC05 -45.32%, rgba(255, 255, 255, 0) 57.28%)' }}>
            <div>
              <h1 className='font-bold md:text-[20px] text-sm leading-[20px]'>Bananas</h1>
              <p className='text-[#FBBC05] text-[12px] font-bold'>20pcs</p>
            </div>
            <div className='md:w-4 w-2 flex items-center justify-center rounded-full md:h-4 h-2 bg-primary mt-3 ml-6'>
              <AiOutlinePlus fill='white' size={12} />
            </div>
          </div>
        </div>

        <div className='absolute md:bottom-7 bottom-0 md:-left-24 -left-2  bg-[#FAFAFE] md:rounded-[20px] rounded-xl'>
          <div className=" flex items-center md:px-7 px-4 md:py-[1.2rem] py-1 md:rounded-[20px] rounded-xl  shadow-xl"
            style={{ background: 'linear-gradient(78.49deg, #F44747 -45.32%, rgba(255, 255, 255, 0) 57.28%)' }}>
            <div>
              <h1 className='font-bold md:text-[20px] leading-[20px] text-sm'>Mutzig</h1>
              <p className='text-[#FBBC05]  text-[12px] md:text-sm font-bold'>20pcs</p>
            </div>
            <div className='md:w-4 w-2 flex items-center justify-center rounded-full md:h-4 h-2 bg-primary md:mt-2 mt-1 md:ml-8 ml-2'>
              <AiOutlinePlus fill='white' size={12} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeBanner