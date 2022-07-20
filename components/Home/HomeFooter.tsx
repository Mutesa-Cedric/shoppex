import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navLinks } from './HomeNav'

function HomeFooter() {
  return (
    <div className='w-full h-56 lg:px-[170px] md:px-[80px] px-4 bg-[#241419] flex flex-col md:pb-5 pb-2 lg:pt-16 md:pt-6 pt-2 items-center justify-between'>
      <div className="w-full flex justify-between flex-col-reverse md:flex-row items-center md:space-y-0 space-y-4">
        <div className="md:space-x-6 md:space-y-0 space-y-2 flex md:flex-row items-center flex-col">
          {
            navLinks.map((navLink) => {
              return <Link href={navLink.link}>
                <span className="text-white/75 font-bold hover:cursor-pointer hover:text-white">{navLink.name}</span>
              </Link>
            })
          }
        </div>
        <Link href={'/'} >
          {/* <Image src={'/images/logo.svg'} alt="logo" width={40} height={40} className="cursor-pointer" /> */}
          <div className='font-bold text-xl cursor-pointer md:pb-0 pb-3'>
            <span className='text-white'>Shop</span>
            <span className='text-primary'>pex</span>
          </div>
        </Link>
      </div>
      <div className='text-white/30 font-bold text-sm w-full text-center flex items-center justify-center '>
        <span className="md:ml-16">Copyright © <a href="https://github.com/Mutesa-Cedric" className="hover:text-white/75">MUTESA Cedrick</a>  2022</span>
      </div>
    </div>
  )
}

export default HomeFooter