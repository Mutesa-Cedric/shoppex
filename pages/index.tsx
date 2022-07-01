import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useAuth from '../hooks/useAuth'
import { useRecoilState } from "recoil";
import { currentPageState } from "../atoms/CurrentPageState";
import { AiOutlineSearch } from 'react-icons/ai'
import Category from '../components/Category'

const Home= () => {

  // const { user, logout, initialLoading } = useAuth();
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  setCurrentPage('items');
  return (
    <div className="bg-[#FAFAFE] md:overflow-y-hidden w-[72%] h-full flex items-center justify-between">
            <Head>
                <title>Shoppex - your items</title>
                <link rel="icon" href="/images/logo.svg" />
            </Head>
            <div className=' lg:px-16 md:px-8 px-4 w-full pt-8'>
                <div className="flex md:flex-row flex-col  items-center justify-between ">
                    <div className=" text-[26px] leading-[32.5px]">
                        <span className="text-[#F9A109] font-bold pr-4">Shoppex</span>
                        <span className='font-semibold '>allows you to take your </span>
                        <span className='block font-semibold '>shopping list wherever you go</span>
                    </div>
                    <div className='relative'>
                        <input type="text" placeholder='search item'
                            className='bg-white py-3 rounded-xl pl-12 placeholder:capitalize w-full shadow-sm focus:outline-none focus:border-primary focus:border-2 text-gray-500 ' />
                        <div className="absolute top-4 left-4">
                            <AiOutlineSearch size={20} />
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <Category category='Fruit and vegetables' />
                    <Category category='Meat and Fish' />
                    <Category category='Beverages' />
                </div>
            </div>
        </div>
  )
}
export default Home
