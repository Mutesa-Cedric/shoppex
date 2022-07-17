import Image from 'next/image'
import React from 'react'
import { Review } from '../../typings'

function Review({img,location,content,name}:Review) {
  return (
    <div className='w-[380px] space-y-8 bg-white rounded-[10px] shadow-sm flex flex-col p-6 justify-between'>
        <div className='flex items-center space-x-5'>
            <Image src={img} alt="profile" width={40} height={40}/>
            <div className='flex flex-col'>
              <h1 className="font-bold capitalize">{name}</h1>
              <p className="text-[#C4C4C4] text-sm">{location}</p>
            </div>
        </div>
        <div>
          <p className="text-[#505050BF]/50 font-semibold">{content}</p>
        </div>
    </div>
  )
}

export default Review