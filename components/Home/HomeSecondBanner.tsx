import { useRouter } from 'next/router';
import React from 'react'

const firstDots = new Array(80).fill(1);
const secondDots = new Array(110).fill(1);
function HomeSecondBanner() {
  const router=useRouter();
  return (
    <div className='w-full h-[480px] flex flex-col items-center justify-center bg-[#7F485A] space-y-10 relative'>
      <p className="text-white font-bold text-2xl max-w-md text-center">Don&apos;t be late! Make your shopping perfect and enjoyable with us.</p>
      <button className='text-primary border-2 border-primary rounded-[20px] px-6 py-2  font-bold hover:bg-primary hover:text-white transition-all duration-500' onClick={() => router.push('/welcome?mode=signup')}>
        Get started now
      </button>
      <div className='absolute bottom-0 left-0 grid grid-cols-8 gap-2'>
        {
          firstDots.map(dot => {
            return <div className="w-3 h-3 bg-[#A75C3D] rounded-full"></div>
          })
        }
      </div>
      <div className='absolute right-0 -top-16 grid grid-cols-11 gap-2'>
        {
          secondDots.map(dot => {
            return <div className="w-3 h-3 bg-[#D9D9D980]/50 rounded-full"></div>
          })
        }
      </div>
    </div>
  )
}

export default HomeSecondBanner