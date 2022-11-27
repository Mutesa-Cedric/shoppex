import Head from 'next/head';
import useSWR from 'swr';
import type { NextPage } from "next"
import { useRecoilState, useRecoilValue } from "recoil";
import { currentPageState, showItemNav } from "../state/CurrentPageState";
import { AiOutlineSearch } from 'react-icons/ai'
import Category from '../components/Item/Category'
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import fetcher from '../utils/fetcher';

// export async function getServerSideProps() {
//     const data = await fetcher.get('/items');
//     return {
//         props: {
//             items: data
//         }
//     }
// }

// interface Props {
//     items: Item[]
// }
const Items = () => {
    const show = useRecoilValue(showItemNav);
    const [size, setSize] = useState(1200);
    const [_currentPage, setCurrentPage] = useRecoilState(currentPageState);

    useEffect(() => {
        setCurrentPage('items');
        setSize(window.innerWidth);
        window.addEventListener('resize', () => {
            setSize(window.innerWidth)
        });
        return () => {
            window.removeEventListener('resize', () => { })
        }
    }, []);

    return (
        <div className="bg-[#FAFAFE] md:overflow-y-hidden relative ml-20 lg:w-[72%] w-full flex items-center md:flex-row flex-col justify-between"
            style={{ display: `${show && size < 768 ? "none" : ''}` }}>
            <Head>
                <title>Shoppex - your items</title>
                <link rel="icon" href="/images/logo.svg" />
            </Head>
            <div className='lg:px-16 md:px-8 px-4  w-full pt-8'>
                <div className="flex md:flex-row flex-col md:space-y-0 space-y-4   md:items-center justify-between ">
                    <div className=" text-[26px] leading-[32.5px]">
                        <span className="text-[#F9A109] font-bold pr-4">Shoppex</span>
                        <span className='font-semibold '>allows you to take your </span>
                        <span className='block font-semibold '>shopping list wherever you go</span>
                    </div>
                    <div className='relative'>
                        <input type="text" placeholder='search item'
                            className='bg-white py-3 rounded-xl pl-12 placeholder:capitalize border-2 w-full shadow-sm focus:outline-none focus:border-primary border-white text-gray-500 ' />
                        <div className="absolute top-4 left-4">
                            <AiOutlineSearch size={20} />
                        </div>
                    </div>
                </div>
                <div className="md:mt-12">
                    <Category category='Fruit and vegetables' />
                    <Category category='Meat and Fish' />
                    <Category category='Beverages' />
                </div>
            </div>
        </div>
    )
}
export default Items
