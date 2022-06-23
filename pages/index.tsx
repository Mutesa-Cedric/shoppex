import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import Category from '../components/Category'
import ItemSideBar from '../components/ItemSideBar'
import SideNav from '../components/SideNav'
import useAuth from '../hooks/useAuth'

const Home: NextPage = () => {

  const { user, logout } = useAuth();
  return (
    <div className="bg-[#FAFAFE]">
      <Head>
        <title>Shoppex - Home</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="w-full h-screen flex justify-between">
        <SideNav />
        <div className=' lg:px-16 md:px-8 px-4 border-gray-600 md:w-4/6 w-[90%] pt-8'>
          <div className="flex md:flex-row flex-col  items-center justify-between ">
            <div className=" text-[26px] leading-[32.5px]">
              <span className="text-[#F9A109] font-bold pr-4">Shoppex</span>
              <span className='font-semibold '>allows you to take your </span>
              <span className='block font-semibold '>shopping list wherever you go</span>
            </div>
            <div className='relative w-2/5 '>
              <input type="text" placeholder='search item'
                className='bg-white py-3 rounded-xl pl-12 placeholder:capitalize w-full shadow-sm focus:outline-none text-gray-500 ' />
              <div className="absolute top-4 left-4">
                <AiOutlineSearch size={20}/>
              </div>
            </div>
            
          </div>
          <div className="mt-12">
              <Category category='Fruit and vegetables'/>
              <Category category='Meat and Fish'/>
              <Category category='Beverages'/>
            </div>
        </div>
        <ItemSideBar />
      </main>
    </div>
  )
}
export default Home
