import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navLinks } from './HomeNav'

function HomeFooter() {
  return (
    <div className='w-full h-56 px-[170px] bg-[#241419] flex flex-col pb-5 pt-16 items-center justify-between'>
      <div className="w-full flex justify-between items-center">
        <div className="space-x-6">
          {
            navLinks.map((navLink) => {
              return <Link href={navLink.link}>
                <span className="text-white/75 font-bold">{navLink.name}</span>
              </Link>
            })
          }
        </div>
        <Link href={'/'} >
          {/* <Image src={'/images/logo.svg'} alt="logo" width={40} height={40} className="cursor-pointer" /> */}
          <div className='font-bold text-xl cursor-pointer'>
            <span className='text-white'>Shop</span>
            <span className='text-primary'>pex</span>
          </div>
        </Link>
      </div>
      <div className='text-white/30 font-bold text-sm w-full text-center flex items-center justify-center '>
        <span className="ml-16">Copyright © MUTESA Cedrick 2022</span>
      </div>
    </div>
  )
}

export default HomeFooter