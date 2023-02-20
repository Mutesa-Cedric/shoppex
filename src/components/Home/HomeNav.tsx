import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import useAuth from '../../hooks/useAuth'

interface NavLink {
  name: string
  link: string
  requireLogin?: boolean
}
export const navLinks: NavLink[] = [
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
  },
  {
    name: "dashboard",
    link: "/items",
    requireLogin: true,
  }
]
function HomeNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user } = useAuth();
  return (
    <div className='h-24 md:w-full w-screen flex items-center justify-between lg:px-[170px] md:px-[60px] px-6'>
      <Link href={'/'} >
        <Image src={'/images/logo.svg'} alt="logo" width={40} height={40} className="cursor-pointer" />
      </Link>

      {!isOpen ?
        <button className='md:hidden' onClick={() => setIsOpen(true)}>
          <AiOutlineMenu size={30} fill="#F9A109" />
        </button>
        :
        <div className='md:hidden relative'>
          <button className='md:hidden' onClick={() => setIsOpen(false)} >
            <MdCancel size={30} fill="#F9A109" />
          </button>
          <div className='absolute shadow-md bg-white top-12 z-50 w-[88vw] rounded-md p-5 space-y-3 flex justify-center flex-col items-center right-0'>
            {
              navLinks.map((link, index) => {
                return <Link href={link.link}>
                  <p key={index} className='text-black hover:cursor-pointer hover:text-primary text-[17px] leading-[21px] font-semibold '>{link.name}</p>
                </Link>
              })
            }
          </div>
        </div>

      }

      <div className='md:flex hidden items-center space-x-12'>

        {user ?
          navLinks.map((link, index) => (
            <Link key={index} href={link.link}>
              <p className='text-black hover:cursor-pointer hover:text-primary text-[17px] leading-[21px] font-semibold '>{link.name}</p>
            </Link>
          )) :
          navLinks.filter(link => !link.requireLogin).map((link, index) => (
            <Link key={`link-${index}`} href={link.link}>
              <p className='text-black hover:cursor-pointer hover:text-primary text-[17px] leading-[21px] font-semibold '>{link.name}</p>
            </Link>
          ))}
      </div>
      {user ?
        <Link href={'/profile'}>
          {user?.photoURL ?
            <Image  src={user.photoURL} width={40} height={40} className=" md:flex hidden rounded-full cursor-pointer" />
            : <Image src={"/images/profile.svg"} width={40} height={40} className=" md:flex hidden rounded-full cursor-pointer" />
          }
        </Link> :
        <div className='md:flex hidden items-center space-x-10'>
          <Link href={'/welcome?mode=login'}>
            <button className='text-primary font-bold text-[17px]'>
              Login
            </button>
          </Link>

          <Link href={'/welcome?mode=signup'}>
            <button className='text-white bg-[#FF8A00] hover:bg-primary rounded-[64px] py-[7px] font-semibold text-[17px] px-8 '>
              Create Account
            </button>
          </Link>
        </div>}
    </div>
  )
}

export default HomeNav