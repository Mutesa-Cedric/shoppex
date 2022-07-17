import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface NavLink {
  name: string
  link: string
}
const navLinks: NavLink[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: "Our Services",
    link: '#services',
  },
  {
    name: 'Testimonials',
    link: '#testimonials',
  },
  {
    name: 'Contact Us',
    link: '#contact-us',
  }
]
function HomeNav() {
  return (
    <div className='h-20 w-full flex items-center justify-between'>
      <Image src={'/images/logo.svg'} alt="logo" width={40} height={40} />
      <div className='flex items-center space-x-12'>
        {navLinks.map((link, index) => {
          return <Link href={link.link}>
            <p key={index}  className='text-black hover:cursor-pointer hover:text-primary text-[17px] leading-[21px] font-semibold '>{link.name}</p>
          </Link>
        })}
      </div>
      <div className='flex items-center space-x-10'>
        <button className='text-primary font-bold text-[17px]'>
          Login
        </button>
        <button className='text-white bg-[#FF8A00] hover:bg-primary rounded-[64px] py-[7px] font-semibold text-[17px] px-8 '>
          Create Account
        </button>
      </div>
    </div>
  )
}

export default HomeNav