import Image from 'next/image'
import React from 'react'

function Review({ img, location, content, name }:
  { img: string, location: string, content: string, name: string }
) {
  return (
    <div className='md:w-[380px] md:space-y-8 space-y-4 bg-white rounded-[10px] shadow-sm flex flex-col p-6 justify-between'>
      <div className='flex md:flex-row flex-col items-center md:space-x-5'>
        <Image src={img} alt="profile" width={40} height={40} />
        <div className='flex flex-col md:items-start items-center'>
          <h1 className="font-bold capitalize">{name}</h1>
          <p className="text-[#C4C4C4] text-sm">{location}</p>
        </div>
      </div>
      <div>
        <p className="text-[#505050BF]/50 font-semibold md:text-start text-center">{content}</p>
      </div>
    </div>
  )
}

export default Review