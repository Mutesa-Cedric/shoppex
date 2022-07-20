import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function HomeAds() {
  const router = useRouter();
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize(window.innerWidth)
    });
    return () => {
      window.removeEventListener('resize', () => { })
    }
  }, [])

  return (
    <div className='flex justify-between md:flex-row flex-col items-center md:w-full w-screen lg:px-[170px] md:px-[80px] px-4  md:space-y-0 space-y-4 py-12'>
      <div className="flex flex-col md:items-start items-center md:space-y-5 space-y-2 md:w-2/4">
        <h1 className="font-bold md:text-4xl text-2xl md:text-start text-center max-w-lg">We provide the best interface for shopping list management.</h1>
        <p className="text-black/75 font-bold pb-6 max-w-lg md:text-start text-center">Shoppex  is here to give you a clear and simple way to help you manage all you shopping items in case you&apos;re going to the market. Don&apos;t face pain when shopping...</p>
        <button className='text-primary border-2 border-primary rounded-[20px] px-6 py-2 w-2/4 font-bold hover:bg-primary hover:text-white transition-all duration-500' onClick={() => router.push('/welcome?mode=signup')}>
          Get started now
        </button>
      </div>
      <div className='relative'>
        <Image src={'/images/inside.png'} alt="inside" width={size > 768 ? 500 : 400} height={size > 768 ? 300 : 250} className="shadow-lg z-50" />
        <svg className="absolute md:-top-28 -top-20  md:-right-16 -right-4" width={size > 768 ? 310 : 100} height={window.innerWidth > 768 ? 230 : 200} viewBox="0 0 370 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46.5001 78.0001C-36.0432 105.765 12.2149 197.288 52.6283 247.594C57.5103 253.671 64.9656 256.959 72.7566 257.214C98.6939 258.062 137.733 261.635 151 271.5C170.5 286 204.5 280 312.5 257C420.5 234 342.5 198.5 335.5 65.5001C328.5 -67.4999 156.5 41.0001 46.5001 78.0001Z" fill="#FF8A00" stroke="#FF8A00" />
        </svg>
      </div>
    </div>
  )
}

export default HomeAds